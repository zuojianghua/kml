import { Component, OnInit, OnDestroy } from '@angular/core';
import {TabHistoryDataService} from '../tab-history-data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

/**
 * 公共内页父类
 * 提供页面加载时的缓存读取时和页面离开时的缓存写入
 */
export class PageComponent implements OnInit,OnDestroy {

  public pageData;
  protected syncData;
  protected saveData;

  constructor(TabHistoryDataService:TabHistoryDataService) {
    this.syncData = () => {
      this.pageData = TabHistoryDataService.syncPageData(this.pageData);
    }

    this.saveData = () => {
      TabHistoryDataService.savePageData(this.pageData);
    }
  }

  ngOnInit() {
    //this.syncData();
  }

  ngOnDestroy() {
    this.saveData();
  }

}
