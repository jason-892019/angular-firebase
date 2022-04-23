import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { HomeComponent } from './home.component';
import { BrowseComponent } from './browse.component';
import { CheckoutComponent } from './checkout.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { NavComponent } from './nav.component';



@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BrowseComponent,
    CheckoutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxPayPalModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
