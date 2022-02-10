import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Admin } from "../models/admin.models";
@Injectable()
export class AdminService{
getAdminList():Observable<Admin[]>{
  return this._http.get<Admin[]>("api/admin")
}
getAdminByIdNumber( idNumber:string):Observable<Admin>{
    return this._http.get<Admin>("api/Admins/"+idNumber)
}
postAdmin(admin:Admin):Observable<number>{
 return this._http.post<number>("api/admin/",admin)   
}
putAdmin(admin:Admin):Observable<Admin>{
    return this._http.put<Admin>("api/admin/",admin)
}
deleteAdmin(id:number){
    return this._http.delete("api/admin/"+id)
}
constructor(private _http : HttpClient){

}
}