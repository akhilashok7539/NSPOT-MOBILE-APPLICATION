import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { endPoints } from '../_config/endpoints';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  username;
  password;
  constructor(private apiservice:InstituteService,private router:Router,public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);

  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  submit(){
    let req = {
      "password": "UCphPvg@",
      "username": "TEI-little5156"

    }
    this.apiservice.doPostRequest(endPoints.login, req).subscribe(
      data=> {
      if (data['status'] === true) {
        console.error(data);
        localStorage.setItem("userLogin",JSON.stringify(data['data']));
        this.router.navigate(['/tabs'])
      }
      else {
        console.error(data);

      }
    },
      error => {
        console.error(error);
    
      });
  }

  ngAfterContentInit()  {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);

  }
  ngOnDestroy() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(false);

  }
}
