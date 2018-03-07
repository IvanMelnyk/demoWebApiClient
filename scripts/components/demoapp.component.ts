// /Scripts/components/ecgapp.component.ts
import { Component, OnInit, ViewChild, ElementRef, Renderer } from "@angular/core";
import { ApplicationConfig } from ".././app.config";
import {
	ActivatedRoute, Router, NavigationCancel, NavigationEnd, NavigationStart,
	NavigationError, Event, UrlSegment
} from "@angular/router";

import {
	CoockieManager, UserViewModel
} from "../model/misc";
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { CommonDataService } from "../services/commondata.service";

@Component({
	selector: "demo-app",
	templateUrl: "data/templates/demo.component.html"
})

//-------------------------------------------------------------------------------------------------
// DemoAppComponent
//-------------------------------------------------------------------------------------------------
export class DemoAppComponent implements OnInit {

	/** Auth subscription. */
	private isAuthenticatedSubs: Subscription = null;

	constructor (private _cs: CommonDataService,
		private _router: Router,
		private _config: ApplicationConfig,
		private _activatedRoute: ActivatedRoute,
		private _el: ElementRef,
		private renderer: Renderer) {

	}
	
	ngOnInit() {
		this.isAuthenticatedSubs = this._cs.authStateBs.subscribe(
			(value: boolean) => this.onAuthStatusChange(value as boolean),
			(error: ErrorEvent) => this.onError("on auth status changes", error as ErrorEvent));
		this._router.events.filter(type => type instanceof NavigationError)
			.subscribe((val) => {
				this._router.navigate(["/not-found/404"]);
			});
		this._router.events.filter(type => type instanceof NavigationEnd)
			.subscribe(() => {
				if (this._config.previousUrl != this._router.url && !this._cs.authState) {
					this._cs.authStateRequest().subscribe(
						(value: boolean) => this._cs.authState = value,
						(error: ErrorEvent) => this.onError("on auth status changes", error as ErrorEvent));
				}
				this._config.previousUrl = this._router.url;
			});
	}

	

	//-------------------------------------------------------------------------------------------------
	private onAuthStatusChange(value: boolean) {
		if (value == null)
			return;
		switch (value) {
			case true:
				this.getUserInfo();
				this._router.navigate([this._config.defaultRoute]);
				break;
			case false:
				this._router.navigate([this._config.loginRoute]);
			break;
		}
	}

	//----------------------------------------------------------------------------------------------
	private getUserInfo() {
		let urlEncodedData: string = "";
		let urlEncodedDataPairs: any[] = [];
		// Turn the data object into an array of URL-encoded key/value pairs.
		urlEncodedDataPairs.push(encodeURIComponent("__RequestVerificationToken") + '=' + encodeURIComponent(CoockieManager.getCookie("X-XSRF-Token")));
		// Combine the pairs into a single string and replace all %-encoded spaces to 
		// the '+' character; matches the behaviour of browser form submissions.
		urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
		this._cs.userInfoRequest(urlEncodedData).subscribe(
			(value: UserViewModel) => this.onUserInfoLoaded(value as UserViewModel),
			(error: ErrorEvent) => this.onError("get user info", error as ErrorEvent));
	}

	//-------------------------------------------------------------------------------------
	/** Process login request. */
	private onUserInfoLoaded(user: UserViewModel)  {
		if (!user) {
			this._cs.userInfoBs.next(null);
			this._cs.authStateBs.next(false);
		}
		else {
			this._cs.userInfoBs.next(user);
		}
	}

	ngOnDestroy(){
		if (this.isAuthenticatedSubs) this.isAuthenticatedSubs.unsubscribe();
	}

	//----------------------------------------------------------------------------------------------
	/**
	 * Handle error.
	 * @param place method name
	 * @param error error body
	 */
	private onError(place: string, error?: ErrorEvent) {
		console.error(`${place} throws error
		 ${error.message || error}`);
	}

}