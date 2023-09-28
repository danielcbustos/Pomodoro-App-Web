import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-validar-pomodoro',
  templateUrl: './validar-pomodoro.component.html',
  styleUrls: ['./validar-pomodoro.component.css']
})
export class ValidarPomodoroComponent implements OnInit {

  constructor(private appComponent: AppComponent,private routerPath: Router) {this.appComponent.mostrarHeader = false; }

  ngOnInit() {
  }
  goToList(){
    this.routerPath.navigate(['/listaPomodoro']);
  }
  goToValidate(){
    this.routerPath.navigate(['/validar']);
  }
}
