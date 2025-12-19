import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-row2-component',
  imports: [FormsModule],
  templateUrl: './row2-component.html',
  styleUrl: './row2-component.css',
})
export class Row2Component {
  constructor(private _servicioTareas: TaskService) {}

  public get servicioTareas(): TaskService {
    return this._servicioTareas;
  }

  public set servicioTareas(value: TaskService) {
    this._servicioTareas = value;
  }
}
