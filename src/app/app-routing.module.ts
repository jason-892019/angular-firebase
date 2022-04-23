import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home.component';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse.component';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'home', component: HomeComponent },
  {path: 'browse', component: BrowseComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
