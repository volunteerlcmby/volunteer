import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './modules/user/log-in/log-in.component';

const routes: Routes = [
  {path:"log-in",component:LogInComponent},
  {path:"",component:LogInComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
