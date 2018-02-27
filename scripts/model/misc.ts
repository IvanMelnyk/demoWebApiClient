import { ApplicationConfig } from ".././app.config";
import { request } from "https";

//-------------------------------------------------------------------------------------------------
// EcgContentStorage
//-------------------------------------------------------------------------------------------------
export class User {
	public email: string;
	public fName: string;
	public lName: string;
	public roles: string[];
	public joinTime: string;
	public expireTime: string;
}

//-------------------------------------------------------------------------------------------------
// Role
//-------------------------------------------------------------------------------------------------
export class Role {
	public name: string;
	public usersCount: string;
}

//-------------------------------------------------------------------------------------------------
// AuthAction
//-------------------------------------------------------------------------------------------------
export enum AuthAction {
	Empty = 0,
	Login,
	GetToken,
	RefreshToken,
	GetUserInfo,
	Register,
	UpdateUserRoles,
	AddRole,
	RenameRole,
	DeleteRole,
	GetAllUsers,
	GetAllRoles,
	UpdateUserInfo,
	AdminResetPassword,
	RemoveUser,
	UpdateUserSession,
	ResetUserSession,
	GetPermissions
}

//-------------------------------------------------------------------------------------------------
// AuthManager
//-------------------------------------------------------------------------------------------------
export class AuthManager {

	constructor (private _config: ApplicationConfig) {}

	public createAction(actionType: AuthAction, bodyData: { [key: string]: string } = null) {
		let action: RequestAction = null;
		switch (actionType) {
			case AuthAction.Login:
				action = new RequestAction("POST", `${this._config.accountEndpoint}Login`, `grant_type=password&username=uname&password=pswd`, "application/x-www-form-urlencoded", false);
				break;
			case AuthAction.GetToken:
				action = new RequestAction("POST", "/Token", `grant_type=password&username=uname&password=pswd`, "application/x-www-form-urlencoded", false);
				break;
			case AuthAction.RefreshToken:
				action = new RequestAction("POST", "/Token", `grant_type=refresh_token&refresh_token=refreshToken&client_id=`, "application/x-www-form-urlencoded", false);
				break;
			case AuthAction.Register:
				action = new RequestAction("POST", "api/Account/Register", "{Email:'e-mail',Password: 'pswd',Confirmpassword: 'cpswd',FirstName: 'fname',LastName: 'lname'}", "application/json", false);
				break;

			case AuthAction.GetUserInfo:
				action = new RequestAction("GET", "api/Account/UserInfo", "", "application/json", true);
				break;

			case AuthAction.UpdateUserRoles:
				action = new RequestAction("POST", "api/Account/UpdateUserRoles", "{UserName:'_username',Roles: '_roles'}", "application/json", false);
				break;

			case AuthAction.DeleteRole:
				action = new RequestAction("POST", "api/Account/RemoveRole", "{name: '_name'}", "application/json", false);
				break;

			case AuthAction.AddRole:
				action = new RequestAction("POST", "api/Account/AddRole", "{name: '_name'}", "application/json", false);
				break;

			case AuthAction.RenameRole:
				action = new RequestAction("POST", "api/Account/RenameRole", "{oldName: '_oldName',newName: '_newName'}", "application/json", false);
				break;

			case AuthAction.GetAllUsers:
				action = new RequestAction("GET", "api/Account/GetAllUsers?isActive=0&fRoles=", "", "application/json", false);
				break;

			case AuthAction.GetAllRoles:
				action = new RequestAction("GET", "api/Account/GetAllRoles", "", "application/json", false);
				break;

			case AuthAction.UpdateUserInfo:
				action = new RequestAction("POST", "api/Account/UpdateUser", "{OldEmail: '_oldEmail',NewEmail: '_newEmail', FirstName: '_firstName', LastName: '_lastName', ExpireTime: '_expireTime'}", "application/json", false);
				break;

			case AuthAction.AdminResetPassword:
				action = new RequestAction("POST", "api/Account/AdminResetUserPassword", "{Email: '_email',NewPassword: '_newPassword'}", "application/json", false);
				break;

			case AuthAction.RemoveUser:
				action = new RequestAction("POST", "api/Account/RemoveUser", "{Email: '_email'}", "application/json", false);
				break;

			case AuthAction.UpdateUserSession:
				action = new RequestAction("POST", "api/Account/UpdateUserSession", "{Session: '_session'}", "application/json", true);
				break;

			case AuthAction.ResetUserSession:
				action = new RequestAction("POST", "api/Account/ResetUserSession", "", "application/json", true);
				break;

			case AuthAction.GetPermissions:
				action = new RequestAction("GET", "api/Account/UserPermissions", "", "application/text", true);
				break;
		}
		if (action) {
			if (bodyData) {
				action.formatBodyData(action.type, bodyData);
			}
		}
		return action;
	}

	public sendRequest(action: RequestAction, onLoadFunc: any, onErrorFunc: any, bindObject: any, isAsync: boolean = true) {
		let xhr = new XMLHttpRequest();
		xhr.open(action.type, action.url, isAsync);

		if (action.useBearer)
			xhr.setRequestHeader("Authorization", "Bearer " + CoockieManager.getCookie("access_token"));

		xhr.setRequestHeader("Content-Type", action.contentType);
		xhr.onload = onLoadFunc.bind(bindObject, xhr);
		xhr.onerror = onErrorFunc.bind(bindObject);
		if (action.bodyData != "")
			xhr.send(action.bodyData);
		else
			xhr.send();
	}

}

//-------------------------------------------------------------------------------------------------
// CoockieManager
//-------------------------------------------------------------------------------------------------
export class CoockieManager {

	public static getCookie(name: string): string {
		let pattern = RegExp(name + "=.[^;]*");
		let cookieValue: string;
		let matched = document.cookie.match(pattern);
		if (matched) {
			let cookies = matched[0].split(";");
			cookies.forEach((cookieStr: string) => {
				let cookieMap = cookieStr.split('=');
				if (cookieMap && cookieMap[0] == name) {
					cookieValue = cookieMap[1].length > 0 ? cookieMap[1] : null;
					return;
				}
			});
		}
		return cookieValue && cookieValue.length > 0 ? cookieValue : null;
	}

	public static checkTokenAvailibility(): boolean {
		let name: string = ".AspNetCore.Identity.Application";
		let token = this.getCookie(name);
		if (token == null)
			this.removeAccToken();
		return !!token;
	}

	public static updateCookies(jsonResponse: string): boolean {
		let tokenObj: TokenResponse = new TokenResponse().parseJson(jsonResponse);
		if (tokenObj.accessToken) {
			let diff: number = new Date(tokenObj.expires).getTime() - new Date(tokenObj.issued).getTime();
			this.setCookie("access_token", tokenObj.accessToken, 172800000, "/", false);
			this.setCookie("refresh_token", tokenObj.refreshToken, 604800000, "/", false);
			this.setCookie("token_expire", tokenObj.expires, 172800000, "/", false);
			return true;
		}
		return false;
	}

	public static updatePermissions(value: string) {
		//this.setCookie("_pm", value, 600000, "/", false);
	}

	public static setCookie(name: string, value: string, expireMS: number, path: string = '', isAbsDate: boolean = false) {
		let d: Date = new Date();
		if (!isAbsDate) {
			//d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
			d.setTime(d.getTime() + expireMS);
		} else {
			d = new Date(expireMS);
			d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
		}

		let expires: string = `expires=${d.toString()}`;
		let cpath: string = path ? `; path=${path}` : '';
		document.cookie = `${name}=${value}; ${expires}${cpath}`;
	}

	public static removeAccToken() {
		//this.setCookie("X-XSRF-Token", "", 0, "/");
		/*this.setCookie("refresh_token", "", 0, "/", true);
		this.setCookie("token_expire", "", 0, "/", true);
		this.setCookie("_pm", "", 0, "/", true);*/
	}

	public static clearCookies() {
		/*document.cookie = "X-XSRF-Token=" +
			";.issued=" +
			";.expires=" +
			";userName=" +
			";token_type=" +
			";expires_in=";*/
	}
}

//-------------------------------------------------------------------------------------------------
// RequestAction
//-------------------------------------------------------------------------------------------------
export class RequestAction {
	public type: string = "";
	public url: string = "";
	public bodyData: string = "";
	public contentType: string = "";
	public useBearer: boolean = false;

	constructor(_type: string, _url: string, _bodyData: string, _contentType: string, _useBearer: boolean) {
		this.type = _type;
		this.url = _url;
		this.bodyData = _bodyData;
		this.contentType = _contentType;
		this.useBearer = _useBearer;
	}

	public formatBodyData(requestType: string, bodyData: { [key: string]: string }) {
		let keys: string[] = Object.keys(bodyData);
		if (requestType == "POST") {
			keys.forEach((key: string) => {
				this.bodyData = this.bodyData.replace(key, bodyData[key]);
			});
		} else if (requestType == "GET") {
			keys.forEach((key: string) => {
				this.url = this.url.replace(key, bodyData[key]);
			});
		}
	}
}

//-------------------------------------------------------------------------------------------------
// TokenResponse
//-------------------------------------------------------------------------------------------------
export class TokenResponse {
	public accessToken: string = null;
	public refreshToken: string = null;
	public tokenType: string = null;
	public expiresIn: number = 0;
	public userName: string = null;
	public issued: string = null;
	public expires: string = null;

	parseJson(jsonResponse: string): TokenResponse {
		if (jsonResponse) {
			try {
				let object: any = JSON.parse(jsonResponse);
				this.accessToken = object["access_token"];
				this.tokenType = object["token_type"];
				this.expiresIn = object["expires_in"];
				this.refreshToken = object["refresh_token"];
				this.userName = object["userName"];
				this.issued = object[".issued"];
				this.expires = object[".expires"];
				return this;
			}
			catch (err) {
				console.warn("Unknown error, please try again!");
			}
		}
		else {
			return this;
		}
	}
}

//-------------------------------------------------------------------------------------------------
// UserInfo
//-------------------------------------------------------------------------------------------------
export class UserInfo {
	public Email: string = "";
	public Roles: string = "";
	public FirstName: string = "";
	public LastName: string = "";
	public HasRegistered: boolean = false;
	public LoginProvider: string = "";

	constructor() {

	}

	public fromJson(jsonStr: string): UserInfo {
		let jsonObj: any = JSON.parse(jsonStr);
		let keys: string[] = Object.keys(jsonObj);
		if (keys.indexOf("Email") != -1 && keys.indexOf("LastName") != -1) {
			return jsonObj;
		}
		return null;
	}
}

//-------------------------------------------------------------------------------------------------
// ErrorParser
//-------------------------------------------------------------------------------------------------
export class ErrorParser {
	public error: string = "";
	public error_description = "";

	constructor() {

	}

	public fromJson(jsonStr: string): ErrorParser {
		try {
			let jsonObj: any = JSON.parse(jsonStr);
			let keys: string[] = Object.keys(jsonObj);
			if (keys.indexOf("error") != -1 && keys.indexOf("error_description") != -1) {
				return jsonObj;
			}
			else {
				let retObj = new ErrorParser();
				retObj.error = "unknown";
				retObj.error_description = "Unknown error occured. Please, try again.";
				return jsonObj;
			}
		} catch (err) {
			let retObj = new ErrorParser();
			retObj.error = "unknown";
			retObj.error_description = "Unknown error occured. Please, try again.";
			return retObj;
		}
	}
}

//-------------------------------------------------------------------------------------------------
// ModelStateParser
//-------------------------------------------------------------------------------------------------
export class ModelStateParser {
	public Message: string = "";

	public ModelState: string[] = [];

	constructor() {

	}

	public fromJson(jsonStr: string): ModelStateParser {
		try {
			let jsonObj: any = JSON.parse(jsonStr);
			let keys: string[] = Object.keys(jsonObj);
			if (keys.indexOf("Message") != -1 && keys.indexOf("ModelState") != -1) {
				let retObj = new ModelStateParser();
				retObj.Message = jsonObj["Message"];
				let msObj = jsonObj["ModelState"];
				keys = Object.keys(msObj);
				keys.forEach((key: string) => {
					retObj.ModelState.push(msObj[key]);
				});
				return retObj;
			}
			else {
				return null;
			}
		} catch (err) {
			let retObj = new ModelStateParser();
			retObj.Message = "unknown";
			retObj.ModelState = ["Unknown error occured. Please, try again."];
			return retObj;
		}
	}
}


export enum UserPermissions {
	Unknown = 100,
	Viewer,
	Editor,
	Doctor,
	Arbiter
}

export class Permissions {

	private decodeRoles(): number[] {
		let permEnum = CoockieManager.getCookie("_pm");
		let permArray: number[] = [];
		(permEnum as string).match(/.{1,3}/g).forEach((val: string) => {
			permArray.push(parseInt(val));
		});
		return permArray;
	}

	public canLoadPage(url: string, isAuth: boolean, appConfig: any) {
		let permArray = this.decodeRoles();
		let route: string = "";
		if (url.length == 0) {
			route = "/";
		} else {
			route = url.split("/")[1];
		}
		let allow: boolean = false;
		let returnURL: string = "";
		switch (route) {
			case "":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					allow = true;
				}
				break;
			case "editor":
				if (permArray.indexOf(UserPermissions.Editor) >= 0) {
					allow = true;
				}
				break;
			case "viewer":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					allow = true;
				}
				break;
			case "analytics":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					allow = true;
					returnURL = ""
				}
				break;
			case "dashboard":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					allow = true;
				}
				break;
			case "home":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					allow = true;
				}
				break;
			case "login":
				if (isAuth) {
					allow = false;
					returnURL = appConfig.defaultRoute;
				} else {
					allow = true
				}
				break;
		}
		return [allow, returnURL]
	}

	public isInRole(roleName: string): boolean {
		let permArray = this.decodeRoles();
		switch (roleName.toLowerCase()) {
			case "editor":
				if (permArray.indexOf(UserPermissions.Editor) >= 0) {
					return true;
				}
				break;
			case "viewer":
				if (permArray.indexOf(UserPermissions.Viewer) >= 0) {
					return true;
				}
				break;
			case "doctor":
				if (permArray.indexOf(UserPermissions.Doctor) >= 0) {
					return true;
				}
				break;
			case "arbiter":
				if (permArray.indexOf(UserPermissions.Arbiter) >= 0) {
					return true;
				}
				break;
			default:
				return false;
		}
	}

}

export enum AuthenticationState {
	Success,
	Failed,
	RefreshToken
}

//----------------------------------------------------------------------------------------------
export enum TRLState {
	Default = 0,
	Empty,
	Ready,
	Loading,
	Error,
	NewPPeak,
	NewPWave,
	NewQRSWave,
	NewTPeak,
	NewTWave,
	NewQPeak,
	NewRPeak,
	NewSPeak
}


export class UserViewModel
{
	public email: string;
	public firstName: string;
	public lastName: string;
}