import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { DashboardComponent }   from './index/dashboard/dashboard.component';

import { IndexModule} from './index/index.module';
import { AppRoutingModule } from './app-routing.module';

import { MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
