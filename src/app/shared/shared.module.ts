import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from "../login/login-module.module";
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
    declarations: [
        ToolbarComponent,
        FooterComponent,
        HomeComponent,
        NotfoundComponent
    ],
    exports: [
        ToolbarComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        LoginModule,
    ]
})
export class SharedModule { }
