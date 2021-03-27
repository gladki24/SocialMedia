import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';


@NgModule({
  declarations: [],
  imports: [
    MainModule,
    LoginModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
