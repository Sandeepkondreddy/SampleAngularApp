import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  constructor(private service:SharedService) { }

  BranchList:any=[];

  ModalTitle!: string;
  ActivateAddEditBranchComponent:boolean=false;
  branch:any;

  ngOnInit(): void {
    this.refreshBranchList();
  }

  addClick(){
    this.branch={
      BranchId:0,
      BranchCode:"",
      BranchName:"",
      Remarks:""
    }
    this.ModalTitle="Add Branch";
    this.ActivateAddEditBranchComponent=true;
  }

  editClick(item: any){
    this.branch=item;
    this.ModalTitle="Edit Branch";
    this.ActivateAddEditBranchComponent=true;
  }

  deleteClick(item: any){    
    if(confirm('Are you sure?')){
      this.service.deleteBranch(item.BranchId).subscribe(data=>{
        alert(data.toString());
        this.refreshBranchList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditBranchComponent=false;
    this.refreshBranchList();
  }

  refreshBranchList(){
    this.service.getBranchList().subscribe(data=>{
      this.BranchList=data;
    });
  }

}
