import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle!: string;
  ActivateAddEditEmpComponent:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeNo:"",
      EmployeeName:"",
      Gender:"",
      DateOfBirth:"",
      Email:"",
      Mobile:"",
      PhotoFileName:"unnamed.png",
      DateofJoining:"",
      Designation:"",
      Department:"",
      Company:"",
      Branch:"",
      Remarks:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComponent=true;
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComponent=true;
  }

  deleteClick(item: any){    
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComponent=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
