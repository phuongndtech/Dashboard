import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatasourceComponent } from './datasource.component';

const routes: Routes = [
  {
    path: '',
    component: DatasourceComponent,
    data: {
      title: 'Datasource'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasourceRoutingModule {
}
