import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: string;
  title: string;
  status: 'pending' | 'completed';
}

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  input: string = '';
  todo: Todo = {
    id: '',
    title: '',
    status: 'pending',
  };

  @Output() clickEvent = new EventEmitter<Todo>();
  sendData() {
    if (this.input.trim() === '') {
      return;
    }
    this.todo = {
      id: Date.now().toString(),
      title: this.input,
      status: 'pending',
    };
    this.clickEvent.emit(this.todo);
    this.input = '';
  }
}
