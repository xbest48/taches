import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  tasks = signal<string[]>([]);

  constructor() { }

  addTask(task: string) {
    this.tasks().push(task);
  }

  removeTask(index: number) {
    this.tasks().splice(index, 1);
  }
}
