import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){

  }
  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  onLogout(){
    this.router.navigate(['./login']);
    this.isUserLoggedIn = false;
  }

}
