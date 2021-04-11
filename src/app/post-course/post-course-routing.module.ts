import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCoursePage } from './post-course.page';

const routes: Routes = [
  {
    path: '',
    component: PostCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCoursePageRoutingModule {}
