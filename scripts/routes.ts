import { ModuleWithProviders }		from "@angular/core";
import { Routes, RouterModule }		from "@angular/router";
import { CanActivateViaAuthGuard, CanActivateLoginViaAuthGuard } from "./services/logger.guard.service";
import { DemoAppComponent }			from "./components/demoapp.component";
import { HomeComponent }			from "./components/home.component";
import { LoginComponent }			from "./components/login.component";
import { NotFoundComponent }		from "./components/notfound.component";

const appRoutes: Routes = [

	{ path: "home", component: HomeComponent , canActivate: [CanActivateViaAuthGuard] },
	{ path: "", redirectTo: "home", pathMatch: "full" },
	
	{ path: "login/", component: LoginComponent, canActivate: [CanActivateLoginViaAuthGuard] },
	{ path: "login/:action", component: LoginComponent, canActivate: [CanActivateLoginViaAuthGuard] },
	{ path: "login", redirectTo: "login/", pathMatch: "full" },
	{ path: "not-found", component: NotFoundComponent },
	{ path: "not-found/:code", component: NotFoundComponent },



	{ path: "**", redirectTo: "home", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });






