import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-configurar-ciclos',
  templateUrl: './configurar-ciclos.component.html',
  styleUrls: ['./configurar-ciclos.component.css']
})
export class ConfigurarCiclosComponent implements OnInit {

  constructor(private appComponent: AppComponent, private routerPath: Router) {this.appComponent.mostrarHeader = true }

  ngOnInit() {
  }
  goToCreate(){
    this.routerPath.navigate(['/crearPomodoro']);
  }
}
