import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLoggedIn: boolean = false;

  buttonText: string ="Log In"

  handleClick(): void {
    this.isLoggedIn = !this.isLoggedIn

    
    if(this.isLoggedIn){
      this.buttonText = "Log Out"
    }
    else {
      this.buttonText = "Log In"
    }
  }
}
