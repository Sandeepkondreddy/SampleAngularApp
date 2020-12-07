import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dept: any;
  DepartmentId!: string;
  DepartmentCode!: string;
  DepartmentName!: string;
  Remarks!: string;

  ngOnInit(): void {
    this.DepartmentId=this.dept.DepartmentId;
    this.DepartmentCode=this.dept.DepartmentCode;
    this.DepartmentName=this.dept.DepartmentName;
    this.Remarks=this.dept.Remarks;
  }

  addDepartment(){
    var val={DepartmentId:this.DepartmentId,
      DepartmentCode:this.DepartmentCode,
      DepartmentName:this.DepartmentName,
      Remarks:this.Remarks };
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });  
  }
  
  updateDepartment(){
    var val={DepartmentId:this.DepartmentId,
      DepartmentCode:this.DepartmentCode,
      DepartmentName:this.DepartmentName,
      Remarks:this.Remarks };
      this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString());
    });  
  }

}
