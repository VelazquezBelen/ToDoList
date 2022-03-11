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
    this.tasks.unshift({"id": this.tasks.length, "name": taskName, "done": false});
  }

  changeTaskState(taskId: number) {
    let index = this.tasks.findIndex(item => item.id === taskId);
    if (this.tasks[index].done == false) 
      this.tasks[index].done = true;
    else
      this.tasks[index].done = false;
  }

  deleteTask(taskId: number) {
    let index = this.tasks.findIndex(item => item.id === taskId);
    this.tasks.splice(index, 1);  
  }
}
