// /scripts/components/home.component.ts
import { Component, Inject, ViewContainerRef,OnInit } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { DialogService } from "ng2-bootstrap-modal";
import { ApplicationConfig } from ".././app.config";
import { Location } from '@angular/common';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CommonDataService } from "../services/commondata.service";
import { GRPCDataService } from "../services/grpc.service";
import { DemoContent, DemoRecord } from "../model/proto/demo.types";
import { UserViewModel, CoockieManager } from "../model/misc";
import { RecordCreatorComponent } from "./record.creator.component";
import { Subscription } from "rxjs";

@Component({
	selector: "demo-home",
	templateUrl: "data/templates/home.component.html"
})

// -------------------------------------------------------------------------------------------------
// HomeComponent
// -------------------------------------------------------------------------------------------------
export class HomeComponent implements OnInit {

	private fullName: string = "NoUser";
	private email: string = "";
	private _isAdmin: boolean;
	/* */
	private userInfoSubsription: Subscription;

	constructor(private _router: Router,
		private _config: ApplicationConfig,
		private _location: Location,
		private _activatedRoute: ActivatedRoute,
		private _cs: CommonDataService,
		private _gs: GRPCDataService,
		private dialogService:DialogService) {
			this._isAdmin = false;
	}

	// ----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		this.userInfoSubsription = this._cs.userInfoBs.subscribe(
			(value: UserViewModel) =>  this.onUserInfoCanges(value as UserViewModel),
			(error: ErrorEvent) => this.onError("user info changes", error as ErrorEvent));
	}

	//-------------------------------------------------------------------------------------
	ngOnDestroy(){
		if (this.userInfoSubsription) this.userInfoSubsription.unsubscribe();
	}

	//-------------------------------------------------------------------------------------
	private openNewDialog() {
		let disposable = this.dialogService.addDialog(RecordCreatorComponent, 
			{
				createRecordCallback:this.newDemoDecodRequest.bind(this)
			},
			{
				closeByClickingOutside: true
			})
			.subscribe((isConfirmed)=>{
				//We get dialog result
				if(isConfirmed) {
					// todo update navogation list
				}
				else {
					// todo nothing
				}
			});
		//We can close dialog calling disposable.unsubscribe();
		//If dialog was not closed manually close it by timeout
		//setTimeout(()=>{
			//disposable.unsubscribe();
		//},10000);
	}

	//-------------------------------------------------------------------------------------
	private onUserInfoCanges(user: UserViewModel)  {
		if (!user) {
			return;
		}
		else {
			this._isAdmin = user.isAdmin;
			this.fullName = user.firstName + " " + user.lastName;
			this.email = user.email;
		}
	}

	//-------------------------------------------------------------------------------------
	private newDemoDecodRequest(data: DemoRecord) {
		if (!data) return;
		this._gs.newDemoRecordRequest(data).subscribe(
			(value: boolean) => this.onSuccessRequest(value as boolean),
			(error: ErrorEvent) => this.onError("rcreate demorecord", error as ErrorEvent));
	}

	//-------------------------------------------------------------------------------------
	private onSuccessRequest(result: boolean) {
		console.log(result);
	}

	//-------------------------------------------------------------------------------------
	private changeAuthState() {
		if (this._cs.authState) {
			let urlEncodedData: string = "";
			let urlEncodedDataPairs: any[] = [];
			// Turn the data object into an array of URL-encoded key/value pairs.
			urlEncodedDataPairs.push(encodeURIComponent("__RequestVerificationToken") + '=' + encodeURIComponent(CoockieManager.getCookie("X-XSRF-Token")));
			// Combine the pairs into a single string and replace all %-encoded spaces to 
			// the '+' character; matches the behaviour of browser form submissions.
			urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

			this._cs.logOutRequest(urlEncodedData).subscribe(
				(value: boolean) => this.onLogoutOut(value as boolean),
				(error: ErrorEvent) => this.onError("login attempt", error as ErrorEvent));
		}
		else {
			this._router.navigate([this._config.loginRoute]);
		}
	}

	// ----------------------------------------------------------------------------------------------
	private onLogoutOut(value: boolean) {
		this._cs.authStateBs.next(false);
	}

	//----------------------------------------------------------------------------------------------
	/**
	 * In a real world app, we might use a remote logging infrastructure
	 * We'd also dig deeper into the error to get a better message
	 * @param error
	*/
	private onError(place: string, error: ErrorEvent) {
		console.error(`${place} throws error ${error.message}`);
	}
}
