import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-welcome-pomodoro',
  templateUrl: './welcome-pomodoro.component.html',
  styleUrls: ['./welcome-pomodoro.component.css']
})
export class WelcomePomodoroComponent implements OnInit {

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
