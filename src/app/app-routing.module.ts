import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demos/demo1/demo1.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "demo1",
    component: Demo1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
