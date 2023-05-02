import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",component:RegistrationComponent,pathMatch:"full"},
  {path:"registration",component:RegistrationComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
