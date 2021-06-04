import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./modules/shared/interceptors/jwt.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
