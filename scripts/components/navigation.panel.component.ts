// /Scripts/components/ecgapp.component.ts
import { Component, OnInit, ViewChild, ElementRef, Renderer } from "@angular/core";
import { ApplicationConfig } from ".././app.config";
import {
	ActivatedRoute, Router, NavigationCancel, NavigationEnd, NavigationStart,
	NavigationError, Event, UrlSegment
} from "@angular/router";

import {
	CoockieManager, UserViewModel, MetaData
} from "../model/misc";
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { CommonDataService } from "../services/commondata.service";
import { GRPCDataService } from "../services/grpc.service";
import { 
	DemoRecordMetadataP,
	MetadataContentP,
	LanguageCode
} from "../model/proto/demo.types";

@Component({
	selector: "nav-panel",
	templateUrl: "data/templates/navigation.panel.component.html"
})

//-------------------------------------------------------------------------------------------------
// NavigationPanelComponent
//-------------------------------------------------------------------------------------------------
export class NavigationPanelComponent implements OnInit {

	private metaList: MetaData[];
	private skip: number;
	private limit: number;

	constructor (private _cs: CommonDataService,
		private _router: Router,
		private _config: ApplicationConfig,
		private _activatedRoute: ActivatedRoute,
		private _el: ElementRef,
		private renderer: Renderer,
		private _gs: GRPCDataService) {
			this.metaList = [];
			this.limit = 100;
			this.skip = 0;
	}
	
	//----------------------------------------------------------------------------------------------
	ngOnInit() {
		this._gs.metadataListRequest(this.skip,this.limit) .subscribe(
			(value: DemoRecordMetadataP[]) => this.onMetadataListReceived(value as DemoRecordMetadataP[]),
			(error: ErrorEvent) => this.onError("receive metadatalist", error as ErrorEvent));
	}

	//----------------------------------------------------------------------------------------------
	private onMetadataListReceived(list: DemoRecordMetadataP[]) {
		if (!list) return;
		this.metaList = [];
		for(let i = 0;i < list.length; i++) {
			let o: MetaData = new MetaData();
			o.recordId = list[i].id;
			o.title = list[i].title;
			o.stage = list[i].stage;
			o.langs = [];
			let langCodes: number = list[i].langSpecs as number;
			if ((langCodes & LanguageCode.English) == LanguageCode.English) {
				o.langs.push("English");
			}
			if ((langCodes & LanguageCode.Russian) == LanguageCode.Russian) {
				o.langs.push("Russian");
			}
			if ((langCodes & LanguageCode.Ukrainian) == LanguageCode.Ukrainian) {
				o.langs.push("Ukrainian");
			}
			this.metaList.push(o);
		}
	}

	private loadInterims(index: number) {
		console.log(`Clicked on el: ${index}`);
	}

	private trackByItem(index: number, item: MetaData) {
		return index; // or item.id
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