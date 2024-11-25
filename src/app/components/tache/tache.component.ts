import { Component, inject, Input } from '@angular/core';
import { TachesService } from 'src/app/services/taches.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent {
  tacheService = inject(TachesService);

  @Input() task: string = '';

  removeTask() {
    const index = this.tacheService.tasks()
        .findIndex(t => t == this.task);
    this.tacheService.removeTask(index);
  }
}
