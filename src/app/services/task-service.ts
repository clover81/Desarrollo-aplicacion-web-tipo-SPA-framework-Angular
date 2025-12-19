import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Atributos
  private _taskList: Task[] = [];
  private _createTaskForm: Task;
  private _isActiveEdition: boolean;
  private _pos: number;

  constructor(private http: HttpClient) {
    this._isActiveEdition = false;
    this._pos = -1;

    if (localStorage.getItem("lista") == null || localStorage.getItem("lista") == "[]") {
      console.log("No existe almacenamiento previo, se cargan datos del backend");
      this.peticionGetBackend();
    } else {
      console.log("Se cargan datos desde localStorage");
      const variableString: any = localStorage.getItem("lista");
      this._taskList = JSON.parse(variableString);
    }

    this._createTaskForm = {
      userId: 1,
      id: this._taskList.length,
      title: "",
      description: "",
      completed: false
    };
  }

  public get pos(): number { return this._pos; }
  public set pos(value: number) { this._pos = value; }

  public get isActiveEdition(): boolean { return this._isActiveEdition; }
  public set isActiveEdition(value: boolean) { this._isActiveEdition = value; }

  public get createTaskForm(): Task { return this._createTaskForm; }
  public set createTaskForm(value: Task) { this._createTaskForm = value; }

  public get taskList(): Task[] { return this._taskList; }
  public set taskList(value: Task[]) { this._taskList = value; }

  public peticionGetBackend(): void {
    this.http.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
      .subscribe((res) => {
        console.log("Datos backend:", res);
        this._taskList = res;
        localStorage.setItem("lista", JSON.stringify(this._taskList));
      });
  }

  public crearTarea(): void {
    if (this._createTaskForm.title === "" || this._createTaskForm.description === "") {
      window.alert("No has escrito nada en el formulario de entrada");
    } else {
      this._createTaskForm.id = Math.max(...this._taskList.map(o => o.id)) + 1;
      const copiaDatosFormulario = { ...this._createTaskForm };
      this._taskList.push(copiaDatosFormulario);
      localStorage.setItem("lista", JSON.stringify(this._taskList));
      this._createTaskForm.title = "";
      this._createTaskForm.description = "";
    }
  }

  public editarTarea(id: number): void {
    this._isActiveEdition = true;
    this._pos = this._taskList.findIndex(t => t.id === id);
    this._createTaskForm = { ...this._taskList[this._pos] };
  }

  public actualizarTarea(): void {
    this._isActiveEdition = false;
    this._taskList[this._pos] = { ...this._createTaskForm };
    localStorage.setItem("lista", JSON.stringify(this._taskList));
    this._createTaskForm.title = "";
    this._createTaskForm.description = "";
    this._pos = -1;
  }

  public borrarTarea(id: number): void {
    this._pos = this._taskList.findIndex(t => t.id === id);
    this._taskList.splice(this._pos, 1);
    localStorage.setItem("lista", JSON.stringify(this._taskList));
    this._pos = -1;
  }

  public completarTarea(evento: any): void {
    if (evento.target.tagName === "TD") {
      const elementoTR: any = evento.target.parentElement;
      this._pos = this._taskList.findIndex(
        tarea => tarea.id === parseInt(elementoTR.id)
      );
      if (this._pos !== -1) {
        this._taskList[this._pos].completed =
          !this._taskList[this._pos].completed;
        localStorage.setItem("lista", JSON.stringify(this._taskList));
        this._pos = -1;
      }
    }
  }
}
