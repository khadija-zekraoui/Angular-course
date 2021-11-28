import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [ // Routes of the app
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]}, 
  { path: 'servers', component: ServersComponent, children: [ // Group routes by parent(top level route) and children
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent },
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // To adding routing functionality to the app
    RouterModule.forRoot(appRoutes) // Allows to register some routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
