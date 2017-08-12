import { Component, OnInit } from '@angular/core';
import { TabHistoryDataService } from '../../common/tab-history-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tab-component',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  //providers: [TabHistoryDataService]
})
export class TabComponent implements OnInit {

  tabData = [];

  constructor(
    private TabHistoryDataService:TabHistoryDataService,
    private router: Router,
  ) { 
    this.tabData = TabHistoryDataService.data;
    //console.log(this.tabData);
  }

  ngOnInit() {

  }

  onClick(tab){
    console.log(tab);
    this.router.navigate([tab.route]);
  }
}
