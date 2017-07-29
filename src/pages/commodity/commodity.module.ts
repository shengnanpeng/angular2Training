import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { CommodityEditComponent } from './commodity-edit/commodity-edit.component';
import { CommodityItemComponent } from './commodity-item/commodity-item.component';
import {CommodityService} from './commodity.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: CommodityListComponent, pathMatch: 'full' },
      { path: 'commodity/edit/:id', component: CommodityEditComponent, pathMatch: 'full' },
      { path: 'commodity', component: CommodityListComponent, pathMatch: 'full' }
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
