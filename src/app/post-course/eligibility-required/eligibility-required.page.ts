import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postacourse } from 'src/app/_models/postaCourse';
import { InstituteService } from 'src/app/_services/institute.service';

@Component({
  selector: 'app-eligibility-required',
  templateUrl: './eligibility-required.page.html',
  styleUrls: ['./eligibility-required.page.scss'],
})
export class EligibilityRequiredPage implements OnInit {
  postaCource = new Postacourse();
  feePayments: any = [];
 
  bankAcoountList: any = [];
  instituteLoginDetails: any = [];
  instituteId;
  totalfee: any;
  instutecoursedetails:any=[];
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
  submit(){
    let req = {
      "eligibiliyInString":this.postaCource.eligibiliyInString,
      "instituteCourseId":this.institutecocourseId
    }
    this.instituteservice.addinstituteeligibility(req,this.instituteId).subscribe(
      data =>{
        this.router.navigateByUrl('/post-course/job-areas')
      },
      error =>{

      }
    )
  }
}
