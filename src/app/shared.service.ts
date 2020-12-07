import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:4520/api";
readonly PhotoUrl="http://localhost:4520/Photos";

  constructor(private http:HttpClient) { }

  getDepartmentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getCompanyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Company');
  }

  addCompany(val:any){
    return this.http.post(this.APIUrl+'/Company',val);
  }

  updateCompany(val:any){
    return this.http.put(this.APIUrl+'/Company',val);
  }

  deleteCompany(val:any){
    return this.http.delete(this.APIUrl+'/Company/'+val);
  }


  getDesignationList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Designation');
  }

  addDesignation(val:any){
    return this.http.post(this.APIUrl+'/Designation',val);
  }

  updateDesignation(val:any){
    return this.http.put(this.APIUrl+'/Designation',val);
  }

  deleteDesignation(val:any){
    return this.http.delete(this.APIUrl+'/Designation/'+val);
  }


  getBranchList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Branch');
  }

  addBranch(val:any){
    return this.http.post(this.APIUrl+'/Branch',val);
  }

  updateBranch(val:any){
    return this.http.put(this.APIUrl+'/Branch',val);;
  }

  deleteBranch(val:any){
    return this.http.delete(this.APIUrl+'/Branch/'+val);
  }


  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartments():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartments');
  }

  getAllCompanys():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllCompanys');
  }

  getAllBranchs():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllBranchs');
  }

  getAllDesignations():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDesignations');
  }
}
