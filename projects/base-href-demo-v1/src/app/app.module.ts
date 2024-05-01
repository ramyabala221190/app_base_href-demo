import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide:APP_BASE_HREF,
    //   useValue:"/app-v1/"
    // }
    {
      provide:APP_BASE_HREF,
      useValue:"/v1/"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
