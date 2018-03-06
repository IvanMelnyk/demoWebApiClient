// /Scripts/components/ecgapp.component.ts
import { Component, OnInit, ViewChild, 
	ElementRef, Renderer, Input,
	Output, EventEmitter, ComponentRef,
	ViewContainerRef, OnDestroy, ComponentFactoryResolver } from "@angular/core";
import { FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from 'rxjs/Subject';
import { ApplicationConfig } from ".././app.config";
import {
	ActivatedRoute, Router, NavigationCancel, NavigationEnd, NavigationStart,
	NavigationError, Event, UrlSegment
} from "@angular/router";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {
	CoockieManager, UserViewModel, MetaData
} from "../model/misc";
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { CommonDataService } from "../services/commondata.service";
import { GRPCDataService } from "../services/grpc.service";
import { 
	DemoRecordMetadataP,
	MetadataContentP,
	LanguageCode,
	DemoRecord,
	DemoContent
} from "../model/proto/demo.types";

export interface ConfirmModel {
	createRecordCallback:any;
}

@Component({
	selector: "rcc",
	templateUrl: "data/templates/record.creator.component.html"
})
 
//-------------------------------------------------------------------------------------------------
// RecordCreatorComponent
//-------------------------------------------------------------------------------------------------
export class RecordCreatorComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

	@ViewChild("title") titleEl: ElementRef;
	@ViewChild("lang") langSelEl: ElementRef;
	@ViewChild("text") textEl: ElementRef;
	
	public createRecordCallback: any; 
	public newRecordForm: FormGroup;

	constructor (private _cs: CommonDataService,
		private _router: Router,
		private _config: ApplicationConfig,
		private _fb: FormBuilder,
		private _activatedRoute: ActivatedRoute,
		private _el: ElementRef,
		dialogService: DialogService) {
			super(dialogService);
			this.newRecordForm = this._fb.group({
				"title": ["", [Validators.required, Validators.minLength(6)]],
				"lang": "",
				"text": ["", [Validators.required, Validators.minLength(8)]]
			});
	}

	// ----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		
	}

	// ----------------------------------------------------------------------------------------------
	private confirm() {
		let formData: {[key: string]: string } = this.newRecordForm.value
		let record = new DemoRecord();
		record.title = formData["title"];
		let content = new DemoContent();
		content.text = formData["text"];
		record.data = content;
		switch(formData["lang"]) {
			case "English":
				record.langSpecs = LanguageCode.English;
			break;
			case "Ukrainian":
				record.langSpecs = LanguageCode.Ukrainian;
			break;
			case "Russian":
				record.langSpecs = LanguageCode.Russian;
			break;
			default:
				record.langSpecs = LanguageCode.UNKNOWN_LANG_CODE;
		}
		this.createRecordCallback(record);
		// we set dialog result as true on click on confirm button, 
		// then we can get dialog result from caller code 
		this.result = true;
		this.close();
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