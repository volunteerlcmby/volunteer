import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

import { Match } from "../models/match.models"

export class FamilyService{
    getMatchList():Observable<Match[]>{
      return this._http.get<Match[]>("api/match")
    }
    getMatchById( id:number):Observable<Match>{
        return this._http.get<Match>("api/match/"+id)
    }
    getMatchByStudentId( idNumber:string):Observable<Match>{
        return this._http.get<Match>("api/match/"+idNumber)
    }
    postMatch(match:Match):Observable<number>{
     return this._http.post<number>("api/match/",match)   
    }
    putFamily(match:Match):Observable<Match>{
        return this._http.put<Match>("api/admin/",match)
    }
    deleteMatch(id:number){
        return this._http.delete("api/match/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }