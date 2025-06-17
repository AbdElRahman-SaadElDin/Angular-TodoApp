import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../form/form';

@Component({
  selector: 'app-list',
  imports: [NgClass],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  @Input() item!: any[];

  @Output() deleteEvent = new EventEmitter<string>();
  onDelete(id: string) {
    this.deleteEvent.emit(id);
  }

  @Output() completeEvent = new EventEmitter<string>();
  onComplete(id: string) {
    this.completeEvent.emit(id);
  }
  @Output() editEvent = new EventEmitter<string>();
  onEdit(id: string) {
    this.editEvent.emit(id);
  }
}
