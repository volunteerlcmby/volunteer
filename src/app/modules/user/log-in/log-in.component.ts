import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Student } from 'src/app/models/student.models';
import { AdminService } from 'src/app/services/admin.service';
import { StudentServise } from 'src/app/services/student.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup=new FormGroup(
    {
     "idNumber":new FormControl("",[Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
    }
  );


  constructor() { }
  // conectToServer():void { 
  // debugger;
  // this._adminService.getAdminByIdNumber("324864800").subscribe(x=>alert(x.id),err=>{console.log(err);});


  // }
  ngOnInit(): void {
  }

}
