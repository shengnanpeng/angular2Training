// 当打包部署静态包时，需要加载本Module

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { CommodityModule } from './commodity/commodity.Module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    CommodityModule,
    AboutModule
  ],
})
export class SPAModule { }
