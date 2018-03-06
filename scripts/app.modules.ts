import { NgModule, CUSTOM_ELEMENTS_SCHEMA }		from "@angular/core";
import { FormsModule, ReactiveFormsModule }		from "@angular/forms";
import { BrowserModule }						from "@angular/platform-browser";
import { BootstrapModalModule }					from 'ng2-bootstrap-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// #### Application
import { DemoAppComponent }						from "./components/demoapp.component";
import { HomeComponent }						from "./components/home.component";
import { NotFoundComponent }					from "./components/notfound.component";
import { LoginComponent }						from "./components/login.component";
import { NavigationPanelComponent }				from "./components/navigation.panel.component";
import { RecordCreatorComponent }				from "./components/record.creator.component";
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
		BootstrapModalModule.forRoot({container:document.body}),
		BrowserAnimationsModule,
		routing, 
		HttpModule,
		FormsModule,
		ReactiveFormsModule		
	],
	declarations: [
		DemoAppComponent,
		LoginComponent,
		NotFoundComponent,
		HomeComponent,
		NavigationPanelComponent,
		RecordCreatorComponent
	],
	entryComponents: [
		RecordCreatorComponent
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