import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataTemplateComponent } from './data-template/data-template.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        HeaderComponent,
        FooterComponent,
        DataTemplateComponent
    ],
    declarations: [HeaderComponent, FooterComponent, DataTemplateComponent]
})
export class SharedUiModule {}
