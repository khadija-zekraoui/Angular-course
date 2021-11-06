import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-databinding-practice';
  count: number = 0;
  autoIncriment;

  onStartGame(count: number){
      this.count = count;
      console.log("file: app.component.ts ~ line 15 ~ AppComponent ~ onStartGame ~ this.count ", this.count )
  }

  isOdd(){
    return this.count % 2 != 0 ? true : false
  }
}
