import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
userName: any;
role: any;
  constructor(){
    this.userName = sessionStorage.getItem('username');
    this.role = sessionStorage.getItem('role');
  }
}
