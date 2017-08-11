import { Component, OnInit } from '@angular/core';
import { TabHistoryDataService } from '../../common/tab-history-data.service';

@Component({
  selector: 'tab-component',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  // providers: [TabHistoryDataService]
})
export class TabComponent implements OnInit {

  tabData = [];

  constructor(private TabHistoryDataService:TabHistoryDataService) { 
    this.tabData = TabHistoryDataService.data;
    console.log(this.tabData);
  }

  ngOnInit() {

  }

}
