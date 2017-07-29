import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { CommodityEditComponent } from './commodity-edit/commodity-edit.component';
import { CommodityItemComponent } from './commodity-item/commodity-item.component';
import {CommodityService} from './commodity.service';

@NgModule({
  imports: [
    CommonModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: CommodityListComponent, pathMatch: 'full' },
      { path: 'student/edit/:sid', component: CommodityEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    CommodityListComponent,
    CommodityEditComponent,
    CommodityItemComponent
  ],
   providers: [CommodityService]

})
export class CommodityModule { }
