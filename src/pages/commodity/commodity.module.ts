import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginCommodityComponent } from './login-commodity/login-commodity.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LoginCommodityComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [LoginCommodityComponent]
})
export class CommodityModule { }
