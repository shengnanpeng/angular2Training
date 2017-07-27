import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commodity-login',
  templateUrl: './login-commodity.component.html',
  styleUrls: ['./login-commodity.component.scss']
})

export class LoginCommodityComponent implements OnInit {
 commodities:Array<any> = [
    {"num":19,
    "name":"commodity3",
      "price":"300"},
      {"num":7,
      "name":"commodity1",
      "price":"100"},
      {"num":14,
      "name":"commodity2",
      "price":"200"}
  ]

  constructor(meta: Meta, title: Title) {
    title.setTitle('Login Commodity Page');

    meta.addTags([
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  sortByAsccending(){
    this.commodities.sort(function (a, b) {
      return a.num - b.num;
    });
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.commodities.sort(function (a, b) {
      return b.num - a.num;
    });
  }
  sortByRadom(){
    this.commodities = this.randomArr(this.commodities);
  }

  randomArr (arr:Array<any>): Array<any>
  {
  let outputArr:Array<any> = arr.slice();
  let i = outputArr.length;
  while (i)
  {
  outputArr.push(outputArr.splice((Math.random() * i--), 1)[0]);
  }
  return outputArr;
  }

  ngOnInit() {
  }
}
