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
	MetadataContent,
	DemoRecordMetadataSequence,
	DemoRecordMetadataP,
	MetadataContentP,
	DemoRecordP
} from "../model/proto/demo.types";
import { request } from 'https';
import  * as Long from "long";
@Injectable()
export class GRPCDataService {

	//-------------------------------------------------------------------------------------
	constructor(private _http: Http,
		private _config: ApplicationConfig) { }

	//-------------------------------------------------------------------------------------
	public newDemoRecordRequest(data: DemoRecord): Observable<boolean> {
		let url: string = `${this._config.grpcapiEndpoint}CreateDemoRecord`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		let uint8Array: Uint8Array = DemoRecord.encode(data).finish();
		let blob: Blob = new Blob([uint8Array], {type: RequestType.ArrayBuffer});
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,blob,options)
			.map(this.onSuccessRequest)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	private onSuccessRequest(res: Response): boolean {
		return true;
	}

	//-------------------------------------------------------------------------------------
	public newInterimRequest(req: InsertInterimRequest): Observable<boolean> {
		let url: string = `${this._config.grpcapiEndpoint}CreateInterim`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		let uint8Array: Uint8Array = InsertInterimRequest.encode(req).finish();
		let blob: Blob = new Blob([uint8Array], {type: RequestType.ArrayBuffer});
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,blob,options)
			.map(this.onSuccessRequest)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	public rmLockRequest(recordId: string): Observable<boolean> {
		let url: string = `${this._config.grpcapiEndpoint}RemoveLock`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("record-id",recordId);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,null,options)
			.map(this.onSuccessRequest)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	public metadataListRequest(skip: number, limit: number): Observable<DemoRecordMetadataP[]> {
		let url: string = `${this._config.grpcapiEndpoint}GetRecordMetadataList?skip=${skip}&limit=${limit}`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.get(url,options)
			.map(this.onMetadataListResponse)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	private onMetadataListResponse(res: Response): DemoRecordMetadataP[] {
		try {
			let ct: string = res.headers.get("Content-Type");
			switch (ct) {
				case "application/octet-stream":
				case "application/x-binary":
				case "application/protobuf":
				case "application/x-protobuf":
					let uint8Array =  new Uint8Array(res.arrayBuffer());
					let sequence = DemoRecordMetadataSequence.decode(uint8Array);
					return sequence.demoRecordMetadataList;
				case "text/plain":
				case "application/json":
					throw new Error(`Failed to decode data: ${res.text.toString()}`);
			}
		} catch(ex) {
			console.error(`Failed to decode data: ${ex}`);
		}
	}

	//-------------------------------------------------------------------------------------
	public metadataContentRequest(recordId: string): Observable<MetadataContent> {
		let url: string = `${this._config.grpcapiEndpoint}GetMetadataContent`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("record-id",recordId);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.get(url,options)
			.map(this.onMetadataContentResponse)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	private onMetadataContentResponse(res: Response): MetadataContent {
		try {
			let ct: string = res.headers.get("Content-Type");
			switch (ct) {
				case "application/octet-stream":
				case "application/x-binary":
				case "application/protobuf":
				case "application/x-protobuf":
					let uint8Array =  new Uint8Array(res.arrayBuffer());
					let content = MetadataContent.decode(uint8Array);
					return content;
				case "text/plain":
				case "application/json":
					throw new Error(`Failed to decode data: ${res.text.toString()}`);
			}
		} catch(ex) {
			console.error(`Failed to decode data: ${ex}`);
		}
	}

	//-------------------------------------------------------------------------------------
	public lookupNextDemoRecord(): Observable<DemoRecord | string> {
		let url: string = `${this._config.grpcapiEndpoint}GetMetadataContent`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.Binary);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.get(url,options)
			.map(this.onMetadataContentResponse)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	private onDemoRecordResponse(res: Response): DemoRecord | string {
		try {
			let ct: string = res.headers.get("Content-Type");
			switch (ct) {
				case "application/octet-stream":
				case "application/x-binary":
				case "application/protobuf":
				case "application/x-protobuf":
					let uint8Array =  new Uint8Array(res.arrayBuffer());
					let record = DemoRecord.decode(uint8Array);
					return record;
				case "text/plain":
				case "application/json":
					return res.text.toString();
			}
		} catch(ex) {
			console.error(`Failed to decode data: ${ex}`);
		}
	}



	//-------------------------------------------------------------------------------------------------
	/**
	 * In a real world app, we might use a remote logging infrastructure
	 * We'd also dig deeper into the error to get a better message
	 * @param error
	 */
	private onError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
