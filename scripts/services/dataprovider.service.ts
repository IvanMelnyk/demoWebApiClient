import { Injectable, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CanActivate, CanLoad, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { ApplicationConfig } from ".././app.config";
import {
	Http,
	HttpModule,
	Request,
	Response,
	Headers,
	RequestMethod,
	RequestOptions,
	RequestOptionsArgs,
	ResponseContentType
} from "@angular/http";
import {
	CoockieManager,
	RequestType
} from "../model/misc";
import { 
	DemoContent, 
	DemoRecord ,
	InsertInterimRequest,
	DemoRecordMetadata,
	MetadataContent
} from "../model/proto/demo.types";
import { request } from 'https';
import  * as Long from "long";
@Injectable()
export class DataProviderService {

	//-------------------------------------------------------------------------------------
	constructor(private _http: Http,
		private _config: ApplicationConfig) { }

	public metadataListBs: BehaviorSubject<DemoRecordMetadata[]> = new BehaviorSubject(null);
	public metadataContentBs: BehaviorSubject<MetadataContent> = new BehaviorSubject(null);
	public demoRecordBs: BehaviorSubject<DemoRecord> = new BehaviorSubject(null);

	//-------------------------------------------------------------------------------------
	public get metadataList(): DemoRecordMetadata[] { return this.metadataListBs.value; }
	//-------------------------------------------------------------------------------------
	public set metadataList(value: DemoRecordMetadata[]) { if (value) this.metadataListBs.next(value); }

	//-------------------------------------------------------------------------------------
	public get metadataContent(): MetadataContent{ return this.metadataContentBs.value; }
	//-------------------------------------------------------------------------------------
	public set metadataContent(value: MetadataContent) { if (value) this.metadataContentBs.next(value); }
	
	//-------------------------------------------------------------------------------------
	public get demoRecord(): DemoRecord { return this.demoRecordBs.value; }
	//-------------------------------------------------------------------------------------
	public set demoRecord(value: DemoRecord) { if (value) this.demoRecordBs.next(value); }
}
