import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildserverComponent } from './servers/childserver/childserver.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { MakingformComponent } from './makingform/makingform.component';
import { ChildFormComponent } from './makingform/child-form/child-form.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';



import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDetailsComponent } from './makingform/item-details/item-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AuthComponent } from './auth/auth.component';
import {MatInputModule} from '@angular/material/input';







const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/:name', component: ServersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'makingform', component: MakingformComponent },
  { path: 'auth', component:  AuthComponent  },


  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ChildserverComponent,
    EditServerComponent,
    MakingformComponent,
    ChildFormComponent,
    ItemDetailsComponent,
    AuthComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
