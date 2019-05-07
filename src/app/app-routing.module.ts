import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path:'',  // 空路由
    redirectTo:'', // 重定向到
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'news',
    component: NewComponent
  },
  {
    path:'user',
    component:UserComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
