import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DashboardComponent }   from './index/dashboard/dashboard.component';

import { IndexModule} from './index/index.module';
import { AppRoutingModule } from './app-routing.module';

import { MdButtonModule, MdCheckboxModule, MdIconModule, MdListModule,MdLineModule,MdTabsModule,MdCardModule,MdTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './index/nav/nav.component';
import { MenuComponent } from './index/menu/menu.component';
import { GoodsListComponent } from './base/goods/goods-list/goods-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    GoodsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IndexModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdLineModule,
    MdTabsModule,
    MdCardModule,
    MdTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
