import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions  } from '@angular/http';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing & guards
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';

// directives
import { AlertComponent } from './_directives/alert.component';

// Components
import { NpmComponent } from './npm/npm.component';
import { HeaderMenuComponent } from './_components/header-menu/header-menu.component';
import { AppComponent } from './app.component';

//services
import { AuthenticationService } from "./_services/authentication.service";
import { UserService } from "./_services/user.service";
import { AlertService } from "./_services/alert.service";

// Pages
import { PageNotFoundComponent } from './pages/404/pagenotfound.component';
import { IndexComponent } from './pages/index/index.component';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
	AlertComponent,
	PageNotFoundComponent,
    IndexComponent,
    StartComponent,
    NpmComponent,
    HeaderMenuComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpModule,
    AppRoutingModule,
	BrowserAnimationsModule
  ],
  providers: [
	AuthGuard,
	AlertService,
	UserService,
    AuthenticationService,
	// providers used to create fake backend
	fakeBackendProvider,
	MockBackend,
	BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
