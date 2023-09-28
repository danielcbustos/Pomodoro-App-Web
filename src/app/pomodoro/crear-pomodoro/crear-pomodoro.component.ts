import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-crear-pomodoro',
  templateUrl: './crear-pomodoro.component.html',
  styleUrls: ['./crear-pomodoro.component.css']
})
export class CrearPomodoroComponent implements OnInit {
  mensajeVisible: boolean = false;
  constructor(private appComponent: AppComponent,
    private routerPath: Router) {this.appComponent.mostrarHeader = true}

  ngOnInit() {
    
  }
  goToList(){
    this.routerPath.navigate(['/listaPomodoro']);
  }
  goToList2(){
    this.routerPath.navigate(['/listaPomodoro2']);
  }

  goToConfig(){
    this.routerPath.navigate(['/configurarPomodoro']);
  }
  toggleMensaje() {
    this.mensajeVisible = !this.mensajeVisible;
  }
}
