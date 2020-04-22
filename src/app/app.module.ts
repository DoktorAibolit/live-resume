import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeModule } from './resume/resume.module';
import { PageNotFoundRoutingModule } from './404/page-not-found-routing.module';
import { PageNotFoundModule } from './404/page-not-found.module';
import { CoreModule } from './core/core.module'; 

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeModule,
    PageNotFoundModule,
    PageNotFoundRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
