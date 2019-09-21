import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RoomComponent } from './pages/room/room.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: ':room',
    component: RoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
