import { Component, OnInit, ViewChild } from '@angular/core';

import { Md5 } from "ts-md5/dist/md5";
import { PageComponent } from '../../../common/page/page.component';
//import { TabHistoryDataService } from '../../../common/tab-history-data.service';


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent extends PageComponent implements OnInit {
  //页面缓存的数据
  public pageData = {
    url: 'base/goods/list',
    title: '商品资料',
    data: {
      searchData: {
        keyword: '',
      },
      listData: []
    }
  };

  // private syncData;
  // private saveData;

  // constructor(private TabHistoryDataService: TabHistoryDataService) {
  //   this.syncData = () => {
  //     this.pageData = TabHistoryDataService.syncPageData(this.pageData);
  //   }

  //   this.saveData = () => {
  //     TabHistoryDataService.savePageData(this.pageData);
  //   }
  // }

  ngOnInit() {

    /* 初始测试数据 */
    for (let i = 1; i <= 100; i++) {
      let code = Md5.hashStr('代码' + i);
      this.pageData.data.listData.push({ "goods_id": i, "goods_code": code, "goods_name": "测试商品" + i, "goods_img": "", "brand_code": "", "brand_name": "品牌A", "cate_code": "", "cate_name": "分类B", "status": true });
    }

    /* 继承的同步数据方法 */
    this.syncData();
  }

}
