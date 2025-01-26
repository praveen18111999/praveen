import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
