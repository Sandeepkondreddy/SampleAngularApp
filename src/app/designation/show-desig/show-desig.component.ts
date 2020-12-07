import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-desig',
  templateUrl: './show-desig.component.html',
  styleUrls: ['./show-desig.component.css']
})
export class ShowDesigComponent implements OnInit {

  constructor(private service:SharedService) { }
  DesignationList:any=[];

  ModalTitle!: string;
  ActivateAddEditDesigComponent:boolean=false;
  desig:any;

  ngOnInit(): void {
    this.refreshDesigList();
  }

  addClick(){
    this.desig={
      DesignationId:0,
      DesignationCode:"",
      DesignationName:"",
      Remarks:""
    }
    this.ModalTitle="Add Designation";
    this.ActivateAddEditDesigComponent=true;
  }

  editClick(item: any){
    this.desig=item;
    this.ModalTitle="Edit Designation";
    this.ActivateAddEditDesigComponent=true;
  }

  deleteClick(item: any){
    this.desig=item;
    if(confirm('Are you sure?')){
      this.service.deleteDesignation(item.DesignationId).subscribe(data=>{
        alert(data.toString());
        this.refreshDesigList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditDesigComponent=false;
    this.refreshDesigList();
  }

  refreshDesigList(){
    this.service.getDesignationList().subscribe(data=>{
      this.DesignationList=data;
    });
  }
}
