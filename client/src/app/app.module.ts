import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DashboardComponent }   from './index/dashboard/dashboard.component';

import { IndexModule} from './index/index.module';
import { AppRoutingModule } from './app-routing.module';

import { MdButtonModule, MdCheckboxModule, MdIconModule, MdListModule,MdLineModule,MdTabsModule,MdCardModule,MdTableModule,MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './index/nav/nav.component';
import { MenuComponent } from './index/menu/menu.component';
import { TabComponent } from './index/tab/tab.component';
import { GoodsListComponent } from './base/goods/goods-list/goods-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    TabComponent,
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
    MdInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
