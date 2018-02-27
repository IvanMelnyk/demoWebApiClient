import { Injectable, Inject, } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CanActivate, CanLoad, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { ApplicationConfig } from ".././app.config";
import { AuthenticationState, UserViewModel} from "../model/misc";
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
	RequestAction,
	AuthManager,
	AuthAction,
	UserInfo
} from "../model/misc";

import { DemoContent, DemoRecord } from "../model/proto/demo.types";

@Injectable()
export class CommonDataService {

	//-------------------------------------------------------------------------------------
	constructor(private _http: Http,
		private _config: ApplicationConfig) { }

	/** Auth state behaviors subject. */
	public authStateBs: BehaviorSubject<boolean> = new BehaviorSubject(null);

	//-------------------------------------------------------------------------------------
	public get authState(): boolean { return this.authStateBs.value; }
	//-------------------------------------------------------------------------------------
	public set authState(value: boolean) { if (value) this.authStateBs.next(value); }


	//-------------------------------------------------------------------------------------
	/** Load user info */
	public authStateRequest() {
		let url: string = `${this._config.accountEndpoint}CheckAutorization`;
		let options: RequestOptions = new RequestOptions(new RequestOptions());
		//let headers: Headers = new Headers();
		//headers.append("Content-Type", RequestType.FORM);
		//headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));		
		//options.headers = headers;
		options.responseType = ResponseContentType.Json;
		return this._http.get(url, options)
			.map(this.onAuthStateReceived)
			.catch(this.onError);
	}

	private onAuthStateReceived(res: Response) {
		return res.json();
	}

	//-------------------------------------------------------------------------------------
	/** Login request. */
	public loginRequest(data: string): Observable<boolean> {
		let url: string = `${this._config.accountEndpoint}Login`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.FORM);
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,data,options)
			.map(this.onLoginSuccess)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	/** Process login request. */
	private onLoginSuccess(res: Response): boolean {
		//let response = res.text.toString();
		//console.log(response);
		return true;
	}

	//-------------------------------------------------------------------------------------
	/** Login request. */
	public logOutRequest(data: string): Observable<boolean> {
		let url: string = `${this._config.accountEndpoint}Logout`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.FORM);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,data,options)
			.map(this.onLogOutSuccess)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	/** Process login request. */
	private onLogOutSuccess(res: Response): boolean {
		return true;
	}

	//-------------------------------------------------------------------------------------
	/** Load user info */
	public userInfoRequest(data: string): Observable<UserViewModel> {
		let url: string = `${this._config.accountEndpoint}UserInfo`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		//let headers: Headers = new Headers();
		//headers.append("Content-Type", RequestType.FORM);
		//headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));		
		//options.headers = headers;
		options.responseType = ResponseContentType.Json;
		return this._http.get(url, options)
			.map(this.onUserInfoLoaded)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	/** Process login request. */
	private onUserInfoLoaded(res: Response): UserViewModel {
		return res.json();
	}

	//-------------------------------------------------------------------------------------
	/** Register request. */
	public registerRequest(data: string): Observable<boolean> {
		let url: string = `${this._config.accountEndpoint}Register`;
		let options: RequestOptions = new RequestOptions(new RequestOptions());
		let headers: Headers = new Headers();
		headers.append("Content-Type", RequestType.FORM);
		options.headers = headers;
		options.responseType = ResponseContentType.Text;
		return this._http.post(url, data, options)
			.map(this.onRegisterSuccess)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	/** Process login request. */
	private onRegisterSuccess(res: Response): boolean {
		let response = res.json();
		return true;
	}

	//-------------------------------------------------------------------------------------
	public newDemoRecordRequest(data: DemoRecord): Observable<boolean> {
		let url: string = `${this._config.grpcapiEndpoint}CreateDemoRecord`;
		let options: RequestOptions = new RequestOptions(new RequestOptions() );
		let headers: Headers = new Headers();
		//headers.append("Content-Type", RequestType.TEXT);
		headers.append("X-XSRF-Token", CoockieManager.getCookie("X-XSRF-Token"));
		options.headers = headers;
		let uint8Array: Uint8Array = DemoRecord.encode(data).finish();
		var b64encoded = btoa(String.fromCharCode.apply(null, uint8Array));
		options.responseType = ResponseContentType.Text;
		return this._http.post(url,b64encoded,options)
			.map(this.onSuccessRequest)
			.catch(this.onError);
	}

	//-------------------------------------------------------------------------------------
	private onSuccessRequest(res: Response): boolean {
		let response = res.text.toString();
		console.log(response);
		return true;
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

export enum RequestType {
	FORM = "application/x-www-form-urlencoded",
	JSON = "application/json",
	TEXT = "application/text",
	Binary="application/octet-stream",
	ArrayBuffer="arraybuffer"
}