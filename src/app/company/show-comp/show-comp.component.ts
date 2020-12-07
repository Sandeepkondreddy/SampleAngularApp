import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-comp',
  templateUrl: './show-comp.component.html',
  styleUrls: ['./show-comp.component.css']
})
export class ShowCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  CompanyList:any=[];

  ModalTitle!: string;
  ActivateAddEditCompComponent:boolean=false;
  comp:any;

  ngOnInit(): void {
    this.refreshCompList();
  }

  addClick(){
    this.comp={
      CompanyId:0,
      CompanyCode:"",
      CompanyName:"",
      Remarks:""
    }
    this.ModalTitle="Add Company";
    this.ActivateAddEditCompComponent=true;
  }

  editClick(item: any){
    this.comp=item;
    this.ModalTitle="Edit Company";
    this.ActivateAddEditCompComponent=true;
  }

  deleteClick(item: any){    
    if(confirm('Are you sure?')){
      this.service.deleteCompany(item.CompanyId).subscribe(data=>{
        alert(data.toString());
        this.refreshCompList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCompComponent=false;
    this.refreshCompList();
  }

  refreshCompList(){
    this.service.getCompanyList().subscribe(data=>{
      this.CompanyList=data;
    });
  }
}
