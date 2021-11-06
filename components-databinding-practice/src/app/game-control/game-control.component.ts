import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  lastNumber = 0;
  autoIncriment;
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    
    this.autoIncriment = setInterval(() =>{
      this.lastNumber++;
      this.gameStarted.emit(this.lastNumber)
    }, 1000);
  }

  onStop() {
    clearInterval(this.autoIncriment);
  }
}
