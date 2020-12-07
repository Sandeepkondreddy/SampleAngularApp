import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp: any;
  EmployeeId!: string;
  EmployeeNo!: string;
  EmployeeName!: string;
  Gender!: string;
  DateOfBirth!: string;
  Email!: string;
  Mobile!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;
  DateofJoining!: string;
  Designation!: string;
  Department!: string;
  Company!: string;
  Branch!: string;
  Remarks!: string;
  
  GenderList:any=['Male','Female'];
  DesignationList:any=[];
  DepartmentList:any=[];
  CompanyList:any=[];
  BranchList:any=[];

  ngOnInit(): void {
    this.loadDesignationList();
    this.loadDepartmentList();
    this.loadCompanyList();
    this.loadBranchList();
    this.EmployeeId=this.emp.EmployeeId;
    this.EmployeeNo=this.emp.EmployeeNo;
    this.EmployeeName=this.emp.EmployeeName;
    this.Gender=this.emp.Gender;
    this.DateOfBirth=this.emp.DateOfBirth;
    this.Email=this.emp.Email;
    this.Mobile=this.emp.Mobile;
    this.DateofJoining=this.emp.DateofJoining;
    this.Designation=this.emp.Designation;
    this.Department=this.emp.Department;
    this.Company=this.emp.Company;
    this.Branch=this.emp.Branch;
    this.Remarks=this.emp.Remarks;
    this.PhotoFileName=this.emp.PhotoFileName;
    this.PhotoFilePath=this.service.PhotoUrl+this.emp.PhotoFileName;
  }

  loadDesignationList(){
    this.service.getAllDesignations().subscribe((data:any)=>{
      this.DesignationList=data;
    });
  }
  loadDepartmentList()  {
    this.service.getAllDepartments().subscribe((data:any)=>{
      this.DepartmentList=data;
    });
  }
  loadCompanyList()  {
    this.service.getAllCompanys().subscribe((data:any)=>{
      this.CompanyList=data;
    });
  }
  loadBranchList()  {
    this.service.getAllBranchs().subscribe((data:any)=>{
      this.BranchList=data;
    });
  }

  addEmployee(){
    var val={EmployeeId:this.EmployeeId,
      EmployeeNo:this.EmployeeNo,
      EmployeeName:this.EmployeeName,
      Gender:this.Gender,
      DateOfBirth:this.DateOfBirth,
      Email:this.Email,
      Mobile:this.Mobile,
      DateofJoining:this.DateofJoining,
      Designation:this.Designation,
      Department:this.Department,
      Company:this.Company,
      Branch:this.Branch,
      Remarks:this.Remarks,
      PhotoFileName:this.PhotoFileName };
      this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });  
  }
  
  updateEmployee(){
    var val={EmployeeId:this.EmployeeId,
      EmployeeNo:this.EmployeeNo,
      EmployeeName:this.EmployeeName,
      Gender:this.Gender,
      DateOfBirth:this.DateOfBirth,
      Email:this.Email,
      Mobile:this.Mobile,
      DateofJoining:this.DateofJoining,
      Designation:this.Designation,
      Department:this.Department,
      Company:this.Company,
      Branch:this.Branch,
      Remarks:this.Remarks,
      PhotoFileName:this.PhotoFileName };
      this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    });     
  }

  uploadPhoto(event: { target: { files: any[]; }; }){
    var file=event?.target.files[0];
    const formData:FormData=new FormData();
    formData.append('iploadFile',file,file_name);
  }

}
