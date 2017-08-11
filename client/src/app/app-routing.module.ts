import { NgModule }             from '@angular/core';
import { RouterModule, Routes , Router, ActivatedRoute, NavigationStart } from '@angular/router';
import {TabHistoryDataService} from './common/tab-history-data.service';

import { DashboardComponent }   from './index/dashboard/dashboard.component';
import { GoodsListComponent }   from './base/goods/goods-list/goods-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'base/goods/list', component: GoodsListComponent},
  { path: 'dashboard',  component: DashboardComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(router:Router, TabHistoryDataService:TabHistoryDataService) {
    //路由切换时的事件处理
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        //console.log(event);
        if(!TabHistoryDataService.findPage(event.url,{})){
          TabHistoryDataService.pushPage(event.url,'ceshi');
        }
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}