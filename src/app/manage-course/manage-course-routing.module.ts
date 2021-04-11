import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCoursePage } from './manage-course.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCoursePageRoutingModule {}
