import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './index/dashboard/dashboard.component';
import { GoodsListComponent }   from './base/goods/goods-list/goods-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'base/goods/list', component: GoodsListComponent },
  { path: 'dashboard',  component: DashboardComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}