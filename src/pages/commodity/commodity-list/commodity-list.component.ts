import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {CommodityService} from '../commodity.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-commodity-login',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.scss']
})

export class CommodityListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectcommodity:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  commodities:Array<any>=[];

  getUserClick(ev){
    this.selectcommodity = ev;
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.commodities.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.commodities.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.commodities.forEach((commodity,index)=>{
    commodity.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title,private http:Http, private commodityserv:CommodityService) {

    this.commodities = this.commodityserv.getcommodities();

    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {
  }
}
