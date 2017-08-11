import {Component, OnInit,ViewChild} from '@angular/core';
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  data = [];


  ngOnInit() {
    /* 初始测试数据 */
    for(let i=1;i<=100;i++){
      let code = Md5.hashStr('代码'+i);
      this.data.push({"goods_id":i, "goods_code":code, "goods_name":"测试商品"+i,"goods_img":"","brand_code":"","brand_name":"品牌A","cate_code":"","cate_name":"分类B","status":true});
    }
    console.log(this.data);
  }

}
