import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TemplateModule} from './modules/template/template.module';


@NgModule({
    declarations: [],
    imports: [
        TemplateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
