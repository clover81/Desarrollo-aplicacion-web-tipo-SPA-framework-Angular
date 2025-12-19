import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-row3-component',
  imports: [FormsModule],
  templateUrl: './row3-component.html',
  styleUrl: './row3-component.css',
})
export class Row3Component implements OnInit {
  constructor(private _servicioTareas: TaskService) {}

  public get servicioTareas(): TaskService {
    return this._servicioTareas;
  }

  public set servicioTareas(value: TaskService) {
    this._servicioTareas = value;
  }

  ngOnInit(): void {
    this.servicioTareas.peticionGetBackend();
  }
}

