import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guard/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path:"", component:HomeComponent, canActivate:[authGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},

  //404 PAGE
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
