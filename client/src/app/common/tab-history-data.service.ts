import { Injectable } from '@angular/core';

@Injectable()
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


  pushPage(url,name){
    this.data.push({name:name,route:url});
  }

}
