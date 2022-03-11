import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/data/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = {"id": 0, "name": "", "done": false};
  @Output() delete = new EventEmitter<number>();
  @Output() changeState = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(taskId: number) {
    this.delete.emit(taskId);
  }

  changeTaskState(taskId: number) {
    this.changeState.emit(taskId);
  }  
}
