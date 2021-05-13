import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postacourse } from 'src/app/_models/postaCourse';
import { InstituteService } from 'src/app/_services/institute.service';

@Component({
  selector: 'app-job-areas',
  templateUrl: './job-areas.page.html',
  styleUrls: ['./job-areas.page.scss'],
})
export class JobAreasPage implements OnInit {
  feePayments: any = [];
  postaCource = new Postacourse();
  serviceCharge = "0.0";
  bankCharge = "0.0";
  taxCharge = "0.0";
  bankAcoountList: any = [];
  instituteLoginDetails: any = [];
  instituteId;
  totalfee: any;
  instutecoursedetails: any = [];
  institutecocourseId;
  constructor(private instituteservice: InstituteService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole_modelId;
    this.instutecoursedetails = JSON.parse(sessionStorage.getItem("post-course"));
    this.institutecocourseId = this.instutecoursedetails['data'].id;

  }
  submit() {
    let req = {
      accept: true,
      hasPlacementAssistant: true,
      instituteCourseId: this.institutecocourseId,
      jobAreas: this.postaCource.jobAreas,
      jobPositions: this.postaCource.jobPositions,
      recruiters: this.postaCource.recruiters,
      salaryRange: this.postaCource.salaryRange,
    }
    this.instituteservice.updateJobOpportunity(req, this.institutecocourseId).subscribe(
      data => {
        this.router.navigateByUrl('/tabs/tab1')
      },
      error => {

      }
    )
  }
}
