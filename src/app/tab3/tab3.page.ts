import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private router:Router,private menu:MenuController) {}
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate([''])
  }

  ngOnInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngAfterContentInit()  {
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }
  ngAfterViewInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngOnDestroy() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }


}
