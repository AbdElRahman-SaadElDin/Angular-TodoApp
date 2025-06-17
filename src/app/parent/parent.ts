import { Component } from '@angular/core';
import { List } from '../list/list';
import { Form, Todo } from '../form/form';

@Component({
  selector: 'app-parent',
  imports: [Form, List],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  todos: Todo[] = [];
  receiveMessage(event: Todo) {
    this.todos.push(event);
    console.log(this.todos);
  }

  deleteItem(id: string) {
    const index = this.todos.findIndex((todo: Todo) => todo.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  completeItem(id: string) {
    const index = this.todos.findIndex((todo: Todo) => todo.id === id);
    if (index > -1) {
      this.todos[index].status = 'completed';
    }
  }

  editItem(id: string) {
    const found = this.todos.find((todo: Todo) => todo.id === id);
    if (!found) {
      console.warn('Todo not found');
      return;
    }
    const updatedTodo = window.prompt('Enter New Todo', found.title);
    if (updatedTodo !== null && updatedTodo.trim() !== '') {
      found.title = updatedTodo.trim();
    }
    console.log(id);
  }
}
