// /scripts/components/home.component.ts
import { Component, Inject, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { DialogService } from "ng2-bootstrap-modal";
import { ApplicationConfig } from ".././app.config";
import { Location } from '@angular/common';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CommonDataService } from "../services/commondata.service";
import { GRPCDataService } from "../services/grpc.service";
import { DemoContent, DemoRecord } from "../model/proto/demo.types";
import { UserViewModel } from "../model/misc";
import { RecordCreatorComponent } from "./record.creator.component";

@Component({
	selector: "demo-home",
	templateUrl: "data/templates/home.component.html"
})

// -------------------------------------------------------------------------------------------------
// HomeComponent
// -------------------------------------------------------------------------------------------------
export class HomeComponent {

	constructor(private _router: Router,
		private _config: ApplicationConfig,
		private _location: Location,
		private _activatedRoute: ActivatedRoute,
		private _cs: CommonDataService,
		private _gs: GRPCDataService,
		private dialogService:DialogService) {

	}

	// ----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		
	}

	//-------------------------------------------------------------------------------------
	openNewDialog() {
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
