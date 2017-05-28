import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppServices }  from './app.services'; //Import the globally available service



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent],
  providers:    [ AppServices ], // Register the service as a provider with the AppModule which will make the service available to all the components in the application
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
