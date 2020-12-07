import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-branch',
  templateUrl: './add-edit-branch.component.html',
  styleUrls: ['./add-edit-branch.component.css']
})
export class AddEditBranchComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() branch: any;
  BranchId!: string;
  BranchCode!: string;
  BranchName!: string;
  Remarks!: string;

  ngOnInit(): void {
    this.BranchId=this.branch.BranchId;
    this.BranchCode=this.branch.BranchCode;
    this.BranchName=this.branch.BranchName;
    this.Remarks=this.branch.Remarks;
  }

  addBranch(){
    var val={BranchId:this.BranchId,
      BranchCode:this.BranchCode,
      BranchName:this.BranchName,
      Remarks:this.Remarks };
    this.service.addBranch(val).subscribe(res=>{
      alert(res.toString());
    });  
  }
  
  updateBranch(){
    var val={BranchId:this.BranchId,
      BranchCode:this.BranchCode,
      BranchName:this.BranchName,
      Remarks:this.Remarks };
      this.service.updateCompany(val).subscribe(res=>{
      alert(res.toString());
    });  
  }

}
