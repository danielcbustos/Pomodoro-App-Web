import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomePomodoroComponent } from './welcome-pomodoro/welcome-pomodoro.component';
import { LoginPomodoroComponent } from './login-pomodoro/login-pomodoro.component';
import { RegistroPomodoroComponent } from './registro-pomodoro/registro-pomodoro.component';
import { ListaPomodoroComponent } from './lista-pomodoro/lista-pomodoro.component';
import { CrearPomodoroComponent } from './crear-pomodoro/crear-pomodoro.component';
import { ConfigurarCiclosComponent } from './configurar-ciclos/configurar-ciclos.component';
import { ValidarPomodoroComponent } from './validar-pomodoro/validar-pomodoro.component';
import { ListaPomodoroNuevaComponent } from './lista-pomodoro-nueva/lista-pomodoro-nueva.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[WelcomePomodoroComponent, LoginPomodoroComponent,RegistroPomodoroComponent, ListaPomodoroComponent, CrearPomodoroComponent, ConfigurarCiclosComponent, ValidarPomodoroComponent,ListaPomodoroNuevaComponent],
  declarations: [WelcomePomodoroComponent,LoginPomodoroComponent,RegistroPomodoroComponent,ListaPomodoroComponent,CrearPomodoroComponent, ConfigurarCiclosComponent, ValidarPomodoroComponent,ListaPomodoroNuevaComponent]
})
export class PomodoroModule { }
