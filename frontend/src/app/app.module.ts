import {LOCALE_ID, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./modules/shared/interceptors/jwt.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from "./modules/shared/services/http-error.interceptor";
import '@angular/common/locales/global/pl';


@NgModule({
  declarations: [],
  imports: [
    MainModule,
    LoginModule,
    RegisterModule,
    TemplateModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
