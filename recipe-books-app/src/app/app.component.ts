import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-books-app';
  page: string = 'recipes';

  setPage(page: string) {
    console.log("file: app.component.ts ~ line 13 ~ AppComponent ~ setPage ~ page", page)
    this.page = page;
  }
}
