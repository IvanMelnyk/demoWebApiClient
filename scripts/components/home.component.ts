// /scripts/components/home.component.ts
import { Component, Inject } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { ApplicationConfig } from ".././app.config";
import { Location } from '@angular/common';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CommonDataService } from "../services/commondata.service";
import { GRPCDataService } from "../services/grpc.service";
import { DemoContent, DemoRecord } from "../model/proto/demo.types";
import { UserViewModel, HttpResponse} from "../model/misc";

@Component({
	selector: "demo-home",
	templateUrl: "data/templates/home.component.html"
})

// -------------------------------------------------------------------------------------------------
// NotFoundComponent
// -------------------------------------------------------------------------------------------------
export class HomeComponent {

	constructor(private _router: Router,
		private _config: ApplicationConfig,
		private _location: Location,
		private _activatedRoute: ActivatedRoute,
		private _cs: CommonDataService,
		private _gs: GRPCDataService) {

	}

	// ----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		let record = new DemoRecord();
		let content = new DemoContent();
		content.text = "Demo record!";
		record.data = content;
		this._gs.newDemoRecordRequest(record).subscribe(
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
