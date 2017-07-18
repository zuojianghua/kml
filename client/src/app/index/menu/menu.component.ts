import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
})

export class MenuComponent {
  menu_show: boolean = true;
  //id 菜单ID
  //pid 父级ID
  //name 菜单名称
  //level 菜单级别
  //show 本菜单是显示还是隐藏
  //open 是否有子菜单可以展开
  //opened 子菜单的打开状态 默认false
  //ico 图标名称 https://material.io/icons/
  //route 路由地址
  menu_data = [
    { id: 1, pid: 0, name: '首页', level: 1, show: true, open: false, opened: false, ico: 'home', route: '' },

    { id: 2, pid: 0, name: '档案', level: 1, show: true, open: true, opened: false, ico: 'description', route: '' },
    { id: 201, pid: 2, name: '商品档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 20101, pid: 201, name: '商品列表', level: 3, show: false, open: false, opened: false, ico: 'empty', route: '' },
    { id: 202, pid: 2, name: '店铺档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 203, pid: 2, name: '店铺档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 204, pid: 2, name: '仓库档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 205, pid: 2, name: '往来档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 3, pid: 0, name: '采购', level: 1, show: true, open: true, opened: false, ico: 'shopping_cart', route: '' },
    { id: 301, pid: 3, name: '采购单据', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 302, pid: 3, name: '采购统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 4, pid: 0, name: '批发', level: 1, show: true, open: true, opened: false, ico: 'collections', route: '' },
    { id: 401, pid: 4, name: '批发单据', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 402, pid: 4, name: '批发统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 5, pid: 0, name: '零售', level: 1, show: true, open: true, opened: false, ico: 'image', route: '' },
    { id: 501, pid: 5, name: '零售单据', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 502, pid: 5, name: '零售统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 6, pid: 0, name: '收银', level: 1, show: true, open: true, opened: false, ico: 'print', route: '' },
    { id: 601, pid: 6, name: '收银台', level: 2, show: false, open: false, opened: false, ico: 'empty', route: '' },
    { id: 602, pid: 6, name: '门店单据', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 601, pid: 6, name: '门店盘点', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 7, pid: 0, name: '网销', level: 1, show: true, open: true, opened: false, ico: 'language', route: '' },
    { id: 701, pid: 7, name: '网店配置', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 702, pid: 7, name: '网单处理', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 701, pid: 7, name: '网销统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 8, pid: 0, name: '库存', level: 1, show: true, open: true, opened: false, ico: 'location_city', route: '' },
    { id: 801, pid: 8, name: '库存统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 802, pid: 8, name: '仓库盘点', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 9, pid: 0, name: '会员', level: 1, show: true, open: true, opened: false, ico: 'person', route: '' },
    { id: 901, pid: 9, name: '会员档案', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 902, pid: 9, name: '会员统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 901, pid: 9, name: '会员关怀', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 10, pid: 0, name: '账务', level: 1, show: true, open: true, opened: false, ico: 'date_range', route: '' },
    { id: 1001, pid: 10, name: '应收应付', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 1002, pid: 10, name: '往来统计', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 1001, pid: 10, name: '资金流水', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 1002, pid: 10, name: '成本管理', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


    { id: 11, pid: 0, name: '报表', level: 1, show: true, open: true, opened: false, ico: 'insert_chart', route: '' },


    { id: 12, pid: 0, name: '设置', level: 1, show: true, open: true, opened: false, ico: 'settings', route: '' },
    { id: 1201, pid: 12, name: '系统参数', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 1202, pid: 12, name: '帐号权限', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },
    { id: 1201, pid: 12, name: '系统维护', level: 2, show: false, open: true, opened: false, ico: 'empty', route: '' },


  ];


  //点击菜单地址动作
  onClickName(menu): void {
    //console.log(menu);
    if (menu.open) {
      this.onClickArrow(menu);
    } else {
      //TODO 切换路由
    }

  }
  //点击菜单后面展开按钮的动作
  onClickArrow(menu): void {
    //修改下拉箭头
    menu.opened = !menu.opened;
    //显示和隐藏下级目录
    this.menu_data.map((o) => {
      if (o.pid == menu.id && menu.open) {
        o.show = menu.opened;
        //是否存在孙级目录
        if (o.open) {
          this.menu_data.map((o2) => {
            if (o2.pid == o.id) {
              if (!menu.opened) {
                o2.show = menu.opened;
              } else if (o.opened) {
                o2.show = menu.opened;
              }
            }
          });
        }
      }

    });
  }

  //点击显示和隐藏整个菜单
  onClickIndent(show: boolean): void {
    this.menu_show = show;

    this.menu_data.map((o) => {
      if (o.level == 2 || o.level == 3) {

        //TODO 二级菜单还原有问题
        // if(show){
        //   this.menu_data.map((o2) => {
        //     if(o2.pid==o.id&&o.opened){
        //       o.show = true;
        //     }
        //   });
        // }

        if (!show) {
          o.show = false;
        }

      }
    });
  }
}