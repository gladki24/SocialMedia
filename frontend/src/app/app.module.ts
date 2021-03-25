import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { MainModule } from './modules/main/main.module';


@NgModule({
  declarations: [],
  imports: [
    MainModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
