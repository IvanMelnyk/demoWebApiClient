// /Scripts/components/ecgapp.component.ts
import { Component, OnInit, ViewChild, ElementRef, Renderer } from "@angular/core";
import { ApplicationConfig } from ".././app.config";
import {
	ActivatedRoute, Router, NavigationCancel, NavigationEnd, NavigationStart,
	NavigationError, Event, UrlSegment
} from "@angular/router";
import { FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
	CoockieManager, RequestAction, AuthManager, AuthAction,
	UserInfo, ErrorParser, ModelStateParser, AuthenticationState
} from "../model/misc";
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { CommonDataService } from "../services/commondata.service";

@Component({
	selector: "demo-login",
	templateUrl: "data/templates/login.component.html"
})

//-------------------------------------------------------------------------------------------------
// EcgAppComponent
//-------------------------------------------------------------------------------------------------
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public registerForm: FormGroup;
	private passwordRegex: any = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/';
	private emailRegex: any = "^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";

	private loginAction: boolean = true;
	private canRegister: boolean = true;
	private _urlChangesSubs: Subscription;
	private errorMessage: string = "";
	//private authMan: AuthManager = new AuthManager();

	private isProcessing: boolean = false;

	constructor (private _cs: CommonDataService,
		private _router: Router,
		private _config: ApplicationConfig,
		private _activatedRoute: ActivatedRoute,
		private _fb: FormBuilder,
		private _el: ElementRef,
		private renderer: Renderer) {
		
	}
	
	ngOnInit() {
		this.loginForm = this._fb.group({
			"login": ["", [Validators.required, Validators.minLength(6)]],
			"password": ["", [Validators.required, Validators.minLength(8)]],
			"keepSigned": true
		});

		this.registerForm = this._fb.group({
			"login": ["", [Validators.required, Validators.minLength(6)]],
			"firstName": ["", [Validators.required, Validators.minLength(3)]],
			"lastName": ["", [Validators.required, Validators.minLength(3)]],
			"password": ["", [Validators.required, Validators.minLength(6)/*, Validators.pattern(this.passwordRegex)*/]],
			"confirmPassword": ["", [Validators.required, Validators.minLength(6)]],
		}, { validator: this.checkIfMatchingPasswords('password', 'confirmPassword') });

		this._urlChangesSubs = this._activatedRoute.url.subscribe(
			(segments: UrlSegment[]) => this.onUrlChanged(segments),
			(error: ErrorEvent) => this.onError("on url changed", error as ErrorEvent));
	}


	//----------------------------------------------------------------------------------------------
	/**
	 * Cleanup just before Angular destroys the component. Unsubscribe observables and detach event handlers to avoid memory leaks.
	 * Called just before Angular destroys the directive/component.
	 */
	ngOnDestroy() {
		//console.info("login", "destroy");
		if (this._urlChangesSubs) this._urlChangesSubs.unsubscribe();

	}

	//----------------------------------------------------------------------------------------------
	private onUrlChanged(segments: UrlSegment[]) {
		// todo parse url segments
		if (segments.length == 2) {
			try {
				this.loginAction = (segments[1].path == "register") ? false : true;
				if (this.loginAction && segments[1].path != "") {
					this._config.errTriggered = true;
					this._router.navigate(['/not-found/404']);
				}
			} catch (err) {
				console.log("Wrong url. Error: ", err);
				this._config.errTriggered = true;
				this._router.navigate(['/not-found/404']);
			}
		}

	}

	private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
		
		return (group: FormGroup) => {
			let passwordInput = group.controls[passwordKey],
				passwordConfirmationInput = group.controls[passwordConfirmationKey];
			if (passwordInput.value !== passwordConfirmationInput.value) {
				return passwordConfirmationInput.setErrors({ notEquivalent: true })
			}else {
				return passwordConfirmationInput.setErrors(null);
			}
		}
	}

	//----------------------------------------------------------------------------------------------
	private onKeepSignedClick(e: Event) {
		let value: any = this.loginForm.value;
		value["keepSigned"] = !this.loginForm.controls["keepSigned"].value;
		this.loginForm.setValue(value);
	}

	//----------------------------------------------------------------------------------------------
	private submitLogin(v: any) {
		if (!this.isProcessing) {
			this.isProcessing = true;
			this.updateToken();
		}
	}

	//----------------------------------------------------------------------------------------------
	private submitRegister(v: any) {
		if (!this.isProcessing) {
			this.isProcessing = true;
			this.registerUser();
		}
	}

	//-------------------------------------------------------------------------------------------------
	private updateToken() {
		let value: any = this.loginForm.value;
		let urlEncodedData: string = "";
		let urlEncodedDataPairs: any[] = [];
		let email: string = value["login"];
		let password: string = value["password"];
		// Turn the data object into an array of URL-encoded key/value pairs.
		urlEncodedDataPairs.push(encodeURIComponent("Email") + '=' + encodeURIComponent(email));
		urlEncodedDataPairs.push(encodeURIComponent("Password") + '=' + encodeURIComponent(password));
		urlEncodedDataPairs.push(encodeURIComponent("RememberMe") + '=' + encodeURIComponent("true"));
		urlEncodedDataPairs.push(encodeURIComponent("__RequestVerificationToken") + '=' + encodeURIComponent(CoockieManager.getCookie("X-XSRF-Token")));
		
		// Combine the pairs into a single string and replace all %-encoded spaces to 
		// the '+' character; matches the behaviour of browser form submissions.
		urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

		this._cs.loginRequest(urlEncodedData).subscribe(
			(value: boolean) => this.onLoginSuccess(value as boolean),
			(error: ErrorEvent) => this.onLoginFailed("login attempt", error as ErrorEvent));
	}

	private onLoginSuccess(value: boolean) {
		console.warn("Login successully");
		this._cs.authStateBs.next(true);
		this.isProcessing = false;
	}

	private onLoginFailed(message: string, error: ErrorEvent ) {
		console.warn(`${message} throw ${error.message}`);
		this._cs.authStateBs.next(false);
		this.isProcessing = false;
	}

	//-------------------------------------------------------------------------------------------------
	private registerUser() {
		let value: any = this.registerForm.value;
		let urlEncodedData: string = "";
		let urlEncodedDataPairs: any[] = [];
		let email: string = value["login"];
		let firstName: string = value["firstName"];
		let lastName: string = value["lastName"];
		let password: string = value["password"];
		let confirmPassword: string = value["confirmPassword"];

		// Turn the data object into an array of URL-encoded key/value pairs.
		urlEncodedDataPairs.push(encodeURIComponent("Email") + '=' + encodeURIComponent(email));
		urlEncodedDataPairs.push(encodeURIComponent("Password") + '=' + encodeURIComponent(password));
		urlEncodedDataPairs.push(encodeURIComponent("ConfirmPassword") + '=' + encodeURIComponent(confirmPassword));
		urlEncodedDataPairs.push(encodeURIComponent("FirstName") + '=' + encodeURIComponent(firstName));
		urlEncodedDataPairs.push(encodeURIComponent("LastName") + '=' + encodeURIComponent(lastName));
		urlEncodedDataPairs.push(encodeURIComponent("__RequestVerificationToken") + '=' + encodeURIComponent(CoockieManager.getCookie("X-XSRF-Token")));

		// Combine the pairs into a single string and replace all %-encoded spaces to 
		// the '+' character; matches the behaviour of browser form submissions.
		urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

		this._cs.registerRequest(urlEncodedData).subscribe(
			(value: boolean) => this.onLoginSuccess(value as boolean),
			(error: ErrorEvent) => this.onRegisterFailed("register attempt", error as ErrorEvent));
	}

	private onRegisterFailed(message: string, error: ErrorEvent) {
		console.warn(`${message} throw ${error.message}`);
		this.isProcessing = false;
	}

	// =======================================================================
	private requestDone() {
		//console.log("done");
		this.isProcessing = false;
	}
	
	// =======================================================================
	private requestFail(error: any) {
		// todo enable feedback form + show failure message
		console.log("fail");
		this.isProcessing = false;
	}
	
	//-------------------------------------------------------------------------------------------------
	private onRegisterResponse(xhr: XMLHttpRequest, event: Event) {
		if (xhr.status == 200) {
			this.routeToLogin();
		}
		else {
			console.log("Message: " + xhr.response);
			let error = new ModelStateParser().fromJson(xhr.responseText);
			this.errorMessage = error.ModelState.join("<br>");
		}
		this.isProcessing = false;
	}
	
	private routeToLogin() {
		this._router.navigate([this._config.loginRoute]);
	}
	
	private routeToRegister() {
		this._router.navigate([this._config.registerRoute])
	}
	
	//-------------------------------------------------------------------------------------------------
	private onRequestFailed(e: ErrorEvent) {
		console.error(e.message);
		this.isProcessing = false;
	}
	
	
	//----------------------------------------------------------------------------------------------
	/**
	 * In a real world app, we might use a remote logging infrastructure
	 * We'd also dig deeper into the error to get a better message
	 * @param error
	*/
	private onError(place: string, error: ErrorEvent) {
		console.error(`${place} throws error ${error.message}`);
		this.isProcessing = false;
	}

}