import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacPageRoutingModule } from './contac-routing.module';

import { ContacPage } from './contac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacPageRoutingModule
  ],
  declarations: [ContacPage]
})
export class ContacPageModule {}
