import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string = '';
  tasks: Task[] = [
    { title: "Task a", completed: false },
    { title: "Task b", completed: true },
    { title: "Task c", completed: false }
  ];
  constructor() { }
  add() {
    this.tasks.push({
      title: this.title,
      completed: false
    });
    this.title = '';
  }

  ngOnInit(): void {
    console.table(this.tasks);
  }

}
interface Task {
  title: string;
  completed: boolean;
}