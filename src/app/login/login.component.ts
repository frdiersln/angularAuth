import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService,
              private service:AuthService, private router:Router){
                sessionStorage.clear();
}

userData:any;

loginForm = this.builder.group({
  username:this.builder.control('', Validators.required),
  password:this.builder.control('', Validators.required)
})

proceedLogin(){
  if(this.loginForm.valid){
    this.service.getByCode(this.loginForm.value.username).subscribe(res =>{
      this.userData = res;
      
      if(this.loginForm.value.password === this.userData.password){
        sessionStorage.setItem('username', this.userData.id);
        sessionStorage.setItem('role', this.userData.role);
        this.router.navigate(['']);
      }else{
        this.toastr.error('Kullanıcı adı veya şifre hatalı!');
      }
    });
  }
}

}
