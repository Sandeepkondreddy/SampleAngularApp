import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-comp',
  templateUrl: './add-edit-comp.component.html',
  styleUrls: ['./add-edit-comp.component.css']
})
export class AddEditCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() comp: any;
  CompanyId!: string;
  CompanyCode!: string;
  CompanyName!: string;
  Remarks!: string;

  ngOnInit(): void {
    this.CompanyId=this.comp.CompanyId;
    this.CompanyCode=this.comp.CompanyCode;
    this.CompanyName=this.comp.CompanyName;
    this.Remarks=this.comp.Remarks;
  }

  addCompany(){
    var val={CompanyId:this.CompanyId,
      CompanyCode:this.CompanyCode,
      CompanyName:this.CompanyName,
      Remarks:this.Remarks };
    this.service.addCompany(val).subscribe(res=>{
      alert(res.toString());
    });  
  }
  
  updateCompany(){
    var val={CompanyId:this.CompanyId,
      CompanyCode:this.CompanyCode,
      CompanyName:this.CompanyName,
      Remarks:this.Remarks };
      this.service.updateCompany(val).subscribe(res=>{
      alert(res.toString());
    });  
  }
}
