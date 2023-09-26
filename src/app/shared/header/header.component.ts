import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeLink: string = '';
  constructor(private routerPath: Router) { 
    this.routerPath.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;  // Actualiza el enlace activo cuando cambia la ruta
      }
    });
  }

  ngOnInit() {
  }
  goToWelcome(){
    this.routerPath.navigate(['']);
  }

}
