import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-pomodoro',
  templateUrl: './login-pomodoro.component.html',
  styleUrls: ['./login-pomodoro.component.css']
})
export class LoginPomodoroComponent implements OnInit {

  constructor(private appComponent: AppComponent,
    private routerPath: Router) {
    this.appComponent.mostrarHeader = false;
   }

  ngOnInit() {
  }
  goToRegister(){
    this.routerPath.navigate(['/registroPomodoro']);
  }

  goToValidation(){
    this.routerPath.navigate(['/validar']);
  }
}
