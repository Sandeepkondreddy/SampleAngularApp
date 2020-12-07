import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-desig',
  templateUrl: './add-edit-desig.component.html',
  styleUrls: ['./add-edit-desig.component.css']
})
export class AddEditDesigComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() desig: any;
  DesignationId!: string;
  DesignationCode!: string;
  DesignationName!: string;
  Remarks!: string;

  ngOnInit(): void {
    this.DesignationId=this.desig.DesignationId;
    this.DesignationCode=this.desig.DesignationCode;
    this.DesignationName=this.desig.DesignationName;
    this.Remarks=this.desig.Remarks;
  }

  addDesignation(){
    var val={DesignationId:this.DesignationId,
      DesignationCode:this.DesignationCode,
      DesignationName:this.DesignationName,
      Remarks:this.Remarks };
    this.service.addDesignation(val).subscribe(res=>{
      alert(res.toString());
    });  
  }

  updateDesignation(){
    var val={DesignationId:this.DesignationId,
      DesignationCode:this.DesignationCode,
      DesignationName:this.DesignationName,
      Remarks:this.Remarks };
      this.service.updateDesignation(val).subscribe(res=>{
      alert(res.toString());
    });  
  }

}
