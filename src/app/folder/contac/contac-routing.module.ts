import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacPage } from './contac.page';

const routes: Routes = [
  {
    path: '',
    component: ContacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacPageRoutingModule {}
