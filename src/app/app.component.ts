import { Component, inject } from '@angular/core';
import { TachesService } from './services/taches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taches';

  tacheService = inject(TachesService);

  task: string = '';

  tasks = this.tacheService.tasks;

  addTask() {
    this.tacheService.addTask(this.task);
    this.task = '';
  }
}
