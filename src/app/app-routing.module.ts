import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePomodoroComponent } from './pomodoro/welcome-pomodoro/welcome-pomodoro.component';
import { LoginPomodoroComponent } from './pomodoro/login-pomodoro/login-pomodoro.component';
import { RegistroPomodoroComponent } from './pomodoro/registro-pomodoro/registro-pomodoro.component';
import { ListaPomodoroComponent } from './pomodoro/lista-pomodoro/lista-pomodoro.component';
import { CrearPomodoroComponent } from './pomodoro/crear-pomodoro/crear-pomodoro.component';
import { ConfigurarCiclosComponent } from './pomodoro/configurar-ciclos/configurar-ciclos.component';
import { ValidarPomodoroComponent } from './pomodoro/validar-pomodoro/validar-pomodoro.component';
import { ListaPomodoroNuevaComponent } from './pomodoro/lista-pomodoro-nueva/lista-pomodoro-nueva.component';

const routes: Routes = [
  { path: '', component: WelcomePomodoroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPomodoroComponent, pathMatch: 'full' },
  { path: 'listaPomodoro', component: ListaPomodoroComponent, pathMatch: 'full' },  
  { path: 'registroPomodoro', component:RegistroPomodoroComponent, pathMatch: 'full' },
  { path: 'crearPomodoro', component:CrearPomodoroComponent, pathMatch: 'full' },  
  { path: 'configurarPomodoro', component:ConfigurarCiclosComponent, pathMatch: 'full' },  
  { path: 'validar', component:ValidarPomodoroComponent, pathMatch: 'full' },  
  { path: 'listaPomodoro2', component: ListaPomodoroNuevaComponent, pathMatch: 'full' }, 
  

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
