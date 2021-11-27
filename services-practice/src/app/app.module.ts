import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  // AccountService can be used by the whole application
  // AccountService can be used by other service. That it's not possible if we add it to a component and not to app.module.ts
  // All the application will be use the same instance unless one component or service or directive adds it to its providers
  providers: [/* AccountService, LoggingService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
