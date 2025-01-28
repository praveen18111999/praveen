import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }

}
