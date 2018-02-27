// /Scripts/components/notfound.component.ts
import { Component, Inject } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { ApplicationConfig } from ".././app.config";
import { Location } from '@angular/common';

@Component({
	selector: "app-404",
	templateUrl: "data/templates/notfound.component.html"
})

// -------------------------------------------------------------------------------------------------
// NotFoundComponent
// -------------------------------------------------------------------------------------------------
export class NotFoundComponent {

	private errorCode: number = 404;
	private _urlChangesSubs: any;

	constructor(private _router: Router,
		private _config: ApplicationConfig,
		private _location: Location,
		private _activatedRoute: ActivatedRoute) {
		this.errorCode = 404;
		this._urlChangesSubs = this._activatedRoute.url.subscribe(
			(segments: UrlSegment[]) => this.onUrlChanged(segments),
			(error: ErrorEvent) => this.onError("on url changed", error as ErrorEvent));
	}


	//----------------------------------------------------------------------------------------------
	private onUrlChanged(segments: UrlSegment[]) {
		//if (!this._config.errTriggered)
		//	this._router.navigate([this._config.defaultRoute]);
		// todo parse url segments
		if (segments.length == 2) {
			try {
				this.errorCode = parseInt(segments[1].path);
				this._config.errTriggered = false;
			} catch (err) {
				console.log("Wrong url. Error: ", err);
				return;
			}
		}

	}

	// ----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		if (this.errorCode == 404) {
			document.getElementsByTagName("app-404")[0].classList.add("not-found");
		}
	}

	//----------------------------------------------------------------------------------------------
	private goHome() {
		//this._router.navigate([this._config.defaultRoute]);
		window.location.href = "/";
	}

	//----------------------------------------------------------------------------------------------
	private goBack() {
		this._location.back();
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
