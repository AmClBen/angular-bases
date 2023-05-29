import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
  // onDeleteCharacter(index: number): void{
    // console.log({index});
    // this.onDelete.emit(index);

    if(!id) return;
    // console.log({id});
    this.onDelete.emit(id);
  }

}
