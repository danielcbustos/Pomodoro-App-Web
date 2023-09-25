import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePomodoroComponent } from './pomodoro/welcome-pomodoro/welcome-pomodoro.component';
import { LoginPomodoroComponent } from './pomodoro/login-pomodoro/login-pomodoro.component';

const routes: Routes = [
  { path: '', component: WelcomePomodoroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPomodoroComponent, pathMatch: 'full' },  
  

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
