import { ResultComponent } from './components/result/result.component';
import { InfoAdmisComponent } from './components/info-admis/info-admis.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', component: DashboardComponent, children:
    [
      { path: '', redirectTo: 'info-admis', pathMatch: 'full' },
      { path: 'info-admis', component: InfoAdmisComponent },
      { path: 'result', component: ResultComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
