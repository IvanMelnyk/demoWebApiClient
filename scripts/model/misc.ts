import { ApplicationConfig } from ".././app.config";
import { request } from "https";


//-------------------------------------------------------------------------------------------------
// Role
//-------------------------------------------------------------------------------------------------
export class Role {
	public name: string;
	public usersCount: string;
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
	
}

//----------------------------------------------------------------------------------------------
export class UserViewModel
{
	public email: string;
	public firstName: string;
	public lastName: string;
	public isAdmin: boolean;
}

//----------------------------------------------------------------------------------------------
export enum RequestType {
	FORM = "application/x-www-form-urlencoded",
	JSON = "application/json",
	TEXT = "application/text",
	Binary="application/octet-stream",
	ArrayBuffer="arraybuffer"
}


export class MetaData {
	public recordId: Long | number;
	public title: string;
	public langs: string[];
	public stage: boolean;
}