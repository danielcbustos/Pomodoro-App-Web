import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomePomodoroComponent } from './welcome-pomodoro/welcome-pomodoro.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[WelcomePomodoroComponent],
  declarations: [WelcomePomodoroComponent]
})
export class PomodoroModule { }
