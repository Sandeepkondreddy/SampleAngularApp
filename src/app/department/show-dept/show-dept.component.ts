import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle!: string;
  ActivateAddEditDeptComponent:boolean=false;
  dept:any;

  ngOnInit(): void {
    this.refreshDeptList();
  }

  addClick(){
    this.dept={
      DepartmentId:0,
      DepartmentCode:"",
      DepartmentName:"",
      Remarks:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDeptComponent=true;
  }

  editClick(item: any){
    this.dept=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDeptComponent=true;
  }

  deleteClick(item: any){
    //this.dept=item;
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDeptList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDeptComponent=false;
    this.refreshDeptList();
  }

  refreshDeptList(){
    this.service.getDepartmentList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }
}
