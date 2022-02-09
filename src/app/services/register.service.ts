
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

import { Register } from "../models/register.models"

export class RegisterService{
   
    getRegister( ):Observable<Register[]>{
        return this._http.get<Register[]>("api/register/")
    }
    postRegister(register:Register):Observable<number>{
     return this._http.post<number>("api/register/",register)   
    }
    putRegister(register:Register):Observable<Register>{
        return this._http.put<Register>("api/register/",register)
    }
    deleteRegister(id:number){
        return this._http.delete("api/register/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }