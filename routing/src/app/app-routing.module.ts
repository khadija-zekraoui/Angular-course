import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './components/servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerResolver } from './components/servers/server/server-resolver.service';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  // Routes of the app
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard], // Array of all guards to apply to this route and their child routes
    canActivateChild: [AuthGuard], // Array of all guards to apply to the children of a route
    children: [
      // Group routes by parent(top level route) and children
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      }, // canDeactivate is executed when the user want to leave this route
    ],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found' }, // set static data
  },
  // ** the is the wildcard route means catch all paths that are not defined in the appRoutes
  // It has to be the last route
  { path: '**', redirectTo: '/not-found' }, // redirecting to another route
];

@NgModule({
  // To adding routing functionality to the app
  // Allows to register some routes to the app
  // imports: [RouterModule.forRoot(routes, { useHash: true })], // Use # in the routes
  imports: [RouterModule.forRoot(routes)], // Use # in the routes
  exports: [RouterModule], // Use this module to outsource our routes by exporting RouterModule
})
export class AppRoutingModule {}
