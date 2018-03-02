// /Scripts/app.config.ts
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// -------------------------------------------------------------------------------------------------
// ApplicationConfig
// -------------------------------------------------------------------------------------------------
@Injectable()
export class ApplicationConfig {
	public grpcapiEndpoint: string = "api/DemoData/";
	public accountEndpoint: string = "api/Account/";
	public manageEndpoint: string = "api/Manage/";
	
	public previousUrl: string = "";
	public errTriggered: boolean = false;

	public authenticated: boolean = false;
	public defaultRoute: string = "/home/";
	public configRoute: string = "/config/";
	public loginRoute: string = "/login/";
	public registerRoute: string = "/login/register";
	/** Enable authorization */
	public enableAuth: boolean = true;
	//----------------------------------------------------------------------------------------------
	constructor(private _router: Router) {

	}
}
