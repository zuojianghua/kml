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
      // if(event instanceof NavigationStart) {
      //   //不在路由表不作处理
      //   if(!this.findPage(event.url)){
      //     return;
      //   }
      //   //不在历史记录则加入进去
      //   if(!TabHistoryDataService.findPage(event.url,{})){
      //     TabHistoryDataService.pushPage(event.url,'ceshi');
      //   }
      // }

      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  //判断打开的页面是否在路由表中
  findPage(url:String){
    //console.log(url);
    return routes.find((value)=>{
      return '/'+value.path==url;
    });
  }

}