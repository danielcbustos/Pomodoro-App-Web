import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-registro-pomodoro',
  templateUrl: './registro-pomodoro.component.html',
  styleUrls: ['./registro-pomodoro.component.css']
})
export class RegistroPomodoroComponent implements OnInit {

  constructor(private appComponent: AppComponent,
    private routerPath: Router) { 
      this.appComponent.mostrarHeader = false;
    }

  ngOnInit() {
  }
  goToLogin(){
    this.routerPath.navigate(['/login']);
  }
}
