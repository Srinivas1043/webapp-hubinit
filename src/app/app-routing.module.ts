import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [

  {path: 'app-solutions', component: SolutionsComponent},
  {path: 'app-technologies', component: TechnologiesComponent},
  {path:'app-services', component: ServicesComponent},
  {path:'app-community', component: CommunityComponent},
  {path:'app-about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
