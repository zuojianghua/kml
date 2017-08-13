import { Injectable } from '@angular/core';

@Injectable()

/**
 * 多Tab页面数据缓存服务
 */
export class TabHistoryDataService {
  data = [];
  
  constructor() { 
    this.data[0] = {
      name:'首页',
      data:{},
      route:'dashboard'
    }

  }

  //查询历史记录中是否存在某页面
  findPage(url,param){
    if(url=='/'||url=='/dashboard'||url==""){
      return true; 
    }

    return this.data.find((value)=>{
      if(value.route==url){
        return true;
      }else{
        return false;
      }
    })
  }

  //将页面路由推送到历史记录中
  pushPage(url,name){
    this.data.push({name:name,route:url});
  }

  //同步页面缓存
  syncPageData(pageData){
    let ret;
    if(this.findPage(pageData.url,'')){
      //已经存在从缓存中读取
      this.data.forEach((value,i)=>{
        if(value.route==pageData.url){
          ret = this.data[i].data;
        }
      });
    }else{
      //新打开的页面，写入到缓存
      this.pushPage(pageData.url,pageData.title);
      this.data.forEach((value,i)=>{
        if(value.route==pageData.url){
          this.data[i].data = pageData;
          ret = pageData;
        }
      });
    }
    return ret;
  }

  //数据更新后，保存某页面数据
  savePageData(pageData){
    this.data.forEach((value,i)=>{
      if(value.route==pageData.url){
        this.data[i].data = pageData;
      }
    });
  }

}
