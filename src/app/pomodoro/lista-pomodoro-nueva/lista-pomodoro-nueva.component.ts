import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-lista-pomodoro-nueva',
  templateUrl: './lista-pomodoro-nueva.component.html',
  styleUrls: ['./lista-pomodoro-nueva.component.css']
})
export class ListaPomodoroNuevaComponent implements OnInit {
  tasks: Array<String> = ["Estudiar UX experiencia de usuario","Proyecto IT 1","Proyecto IT 2","Practicar inglés", "Proyecto IT 3"];
  constructor(private appComponent: AppComponent,
    private routerPath: Router) {this.appComponent.mostrarHeader = true; }

  ngOnInit() {
  }
  deleteTask(index: number): void {
    if (window.confirm('¿Estas seguro que quieres eliminar la tarea?')) {
    this.tasks.splice(index, 1);
  }
}

goToCreate(){
  this.routerPath.navigate(['/crearPomodoro']);
}
}
