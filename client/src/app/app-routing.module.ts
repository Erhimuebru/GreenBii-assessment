import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './components/Not-Approved/approve.component';
import { ApprovedComponent } from './components/approved/approved.component';

const routes: Routes = [
  {
    path:'', component: ApproveComponent
  },
  {path:'approved', component: ApprovedComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
