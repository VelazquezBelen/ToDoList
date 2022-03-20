import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() newTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addTask(newTask: string, event: Event) {
    event.preventDefault();
    this.newTask.emit(newTask);
  }
}
