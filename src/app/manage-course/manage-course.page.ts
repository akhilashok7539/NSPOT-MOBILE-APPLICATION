import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.page.html',
  styleUrls: ['./manage-course.page.scss'],
})
export class ManageCoursePage implements OnInit {
  instituteLoginDetails: any = [];
  instituteId;
  institutecourseList: any = [];
  constructor(private instituteService:InstituteService) { }

  ngOnInit() {
   
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole_modelId;
    this.getallcourserbyInstitute();

  }
  getallcourserbyInstitute()
  {
    this.instituteService.getallinstutecourses(this.instituteId).subscribe(
      data =>{
        this.institutecourseList = data['data']
      },
      error =>{

      }
    )
  }
}
