import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CommunityComponent } from './community/community.component';
import { ErrorComponent } from './error/error.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [

  //{path: 'app-solutions', component: SolutionsComponent},
  //{ath: 'app-technologies', component: TechnologiesComponent},
  //{path:'app-services', component: ServicesComponent},
  //{path:'app-community', component: CommunityComponent},
  {path:'app-about', component: AboutComponent},
  {path:'app-coming-soon', component: ComingSoonComponent},
  {path:'app-investors',component:ComingSoonComponent},
  {path:'app-solutions',component:ComingSoonComponent},
  {path:'app-services',component:ComingSoonComponent},

  //{path:'', redirectTo:'/app-about', pathMatch: 'full'},
  {path:'', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
