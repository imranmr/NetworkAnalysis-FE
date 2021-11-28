import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"", redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent}
];
export default routes;
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[RouterModule]
  
})

export class AppRoutingModule { }
