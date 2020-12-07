import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { AddEditDeptComponent } from './department/add-edit-dept/add-edit-dept.component';
import { DesignationComponent } from './designation/designation.component';
import { ShowDesigComponent } from './designation/show-desig/show-desig.component';
import { AddEditDesigComponent } from './designation/add-edit-desig/add-edit-desig.component';
import { CompanyComponent } from './company/company.component';
import { ShowCompComponent } from './company/show-comp/show-comp.component';
import { AddEditCompComponent } from './company/add-edit-comp/add-edit-comp.component';
import { BranchComponent } from './branch/branch.component';
import { ShowBranchComponent } from './branch/show-branch/show-branch.component';
import { AddEditBranchComponent } from './branch/add-edit-branch/add-edit-branch.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDeptComponent,
    AddEditDeptComponent,
    DesignationComponent,
    ShowDesigComponent,
    AddEditDesigComponent,
    CompanyComponent,
    ShowCompComponent,    
    AddEditCompComponent, 
    BranchComponent, 
    ShowBranchComponent, 
    AddEditBranchComponent, 
    EmployeeComponent, 
    ShowEmpComponent, 
    AddEditEmpComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
