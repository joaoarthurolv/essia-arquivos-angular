import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretoriosComponent } from './diretorios/diretorios.component';

const routes: Routes = [
  {
  path: '', component: DiretoriosComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretoriosRoutingModule { }
