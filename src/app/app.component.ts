import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1';
  tasks = new Array();

  addTask(taskName: string) {
    this.tasks.unshift({"name": taskName, "done": false});
  }

  changeTaskState(index: number) {
    if (this.tasks[index].done == false) 
      this.tasks[index].done = true;
    else
      this.tasks[index].done = false;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);  
  }
}
