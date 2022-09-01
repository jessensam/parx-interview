import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectiveExampleComponent } from './components/directive-example/directive-example.component';
import { ParentContainerComponent } from './components/parent-container/parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'parent-container',
    component: ParentContainerComponent,
    children: [
      {
        path: 'books',
        component: BookComponent
      },
      {
        path: 'directive-example',
        component: DirectiveExampleComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
