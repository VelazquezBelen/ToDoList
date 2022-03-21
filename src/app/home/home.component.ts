import { Component, OnInit } from '@angular/core';
import { Task } from 'src/data/Task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskName: string) {
    if(taskName != "")
      this.tasks.unshift({"id": this.tasks.length, "name": taskName, "done": false});
  }

  changeTaskState(taskId: number) {
    let index = this.tasks.findIndex(item => item.id === taskId);
    if (index > -1)
      this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(taskId: number) {
    let index = this.tasks.findIndex(item => item.id === taskId);
    if (index > -1)
      this.tasks.splice(index, 1);  
  }
}
