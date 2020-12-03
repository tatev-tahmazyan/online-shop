import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import appRoutes from './app.routing';
import { BodyComponent } from './body/body.component';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BodyComponent,
    AdminComponent,
    UserComponent,
    ContactUsComponent,
    ClothingComponent,
    ShoesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
