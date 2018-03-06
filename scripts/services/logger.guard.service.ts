import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { CanActivate, CanLoad, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { CommonDataService } from './commondata.service';
import { ApplicationConfig } from ".././app.config";
import { Http} from '@angular/http';
import {
	CoockieManager
} from "../model/misc";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

	//-------------------------------------------------------------------------------------------------
	constructor(private _cs: CommonDataService,
		private _router: Router,
		private _actRouter: ActivatedRoute,
		private _config: ApplicationConfig,
		private http: Http) { }

	//-------------------------------------------------------------------------------------------------
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this._config.enableAuth) {
			if (this._cs.authStateBs.value == null) {
				this._cs.authStateBs.next(false);
			}
			if (this._cs.authStateBs.value == false) {
				this._router.navigate([this._config.loginRoute]);
			}
			return (this._cs.authStateBs.value == true);
		}
		else
			return true;
	}


}

@Injectable()
export class CanActivateLoginViaAuthGuard implements CanActivate {
	constructor(private _cs: CommonDataService,
		private _router: Router,
		private _config: ApplicationConfig) { }

	canActivate() {
		if (this._config.enableAuth) {
			if (this._cs.authStateBs.value == true) {
				this._router.navigate([this._config.defaultRoute]);
			}
			return true;
		}
		else return false;
	}
}
