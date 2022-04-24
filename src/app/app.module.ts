import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { NavComponent } from './nav/nav.component';
import { BackDirective } from './back/back.directive';
import { HelpComponent } from './help/help.component';
import { InfoComponent } from './info/info.component';


=======
>>>>>>> 5b9873d (database works)

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BrowseComponent,
    CheckoutComponent,
    NavComponent,
    BackDirective,
    HelpComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< HEAD
    AngularFirestoreModule,
    NgxPayPalModule,
    GooglePayButtonModule
=======
    AngularFirestoreModule
>>>>>>> 5b9873d (database works)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
