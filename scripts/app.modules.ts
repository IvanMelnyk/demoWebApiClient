import { NgModule, CUSTOM_ELEMENTS_SCHEMA }		from "@angular/core";
import { FormsModule, ReactiveFormsModule }		from "@angular/forms";
import { BrowserModule }						from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// #### Application
import { DemoAppComponent }						from "./components/demoapp.component";
import { HomeComponent }						from "./components/home.component";
import { NotFoundComponent }					from "./components/notfound.component";
import { LoginComponent }						from "./components/login.component";
import { routing }								from "./routes";
// #### Services
import { CommonDataService }					from "./services/commondata.service";
import { GRPCDataService }						from "./services/grpc.service";
import { DataProviderService }					from "./services/dataprovider.service";
import { HttpModule }							from "@angular/http";
import { ApplicationConfig } from "./app.config";
import { CanActivateViaAuthGuard, CanActivateLoginViaAuthGuard } from "./services/logger.guard.service";

@NgModule({
	imports: [
		BrowserModule, 
		routing, 
		HttpModule,
		FormsModule,
		ReactiveFormsModule, 
		BrowserAnimationsModule
	],
	declarations: [
		DemoAppComponent,
		LoginComponent,
		NotFoundComponent,
		HomeComponent
	],
	providers: [
		ApplicationConfig,
		CanActivateViaAuthGuard,
		CanActivateLoginViaAuthGuard,
		CommonDataService,
		GRPCDataService,
		DataProviderService
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [ DemoAppComponent ]
})

export class AppModule {

}