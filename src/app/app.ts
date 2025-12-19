import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task-service';
import { Row1Component } from './components/row1-component/row1-component';
import { Row2Component } from './components/row2-component/row2-component';
import { Row3Component } from './components/row3-component/row3-component';

@Component({
  selector: 'app-root',
  imports: [ Row1Component, Row2Component, Row3Component],
  // providers: [TaskService],
  templateUrl: './app.html',
  //styleUrl: './app.css'
})
export class App {
  // Métodos
  // constructor(private _servicioTareas: TaskService) {}

  // public get servicioTareas(): TaskService {
  //   return this._servicioTareas;
  // }

  // public set servicioTareas(value: TaskService) {
  //   this._servicioTareas = value;
  // }
}
