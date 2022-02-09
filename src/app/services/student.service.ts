import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "../models/person.models";

import { Student } from "../models/student.models"
import { StudentYear } from "../models/studentyear.models";

export class StudentServise{
   
    getallStudent():Observable<Student[]>{
        return this._http.get<Student[]>("api/student/")
    }
    getStudentById( id:number):Observable<Student>{
        return this._http.get<Student>("api/student/"+id)
    }
    
    postStudent(student:Student):Observable<number>{
     return this._http.post<number>("api/student/",student)   
    }
    putStudent(student:Student):Observable<Student>{
        return this._http.put<Student>("api/student/",student)
    }
    deleteStudent(id:number){
        return this._http.delete("api/student/"+id)
    }
    getallPerson():Observable<Person[]>{
        return this._http.get<Person[]>("api/student/")
    }
    getPersonById( id:number):Observable<Student>{
        return this._http.get<Student>("api/student/"+id)
    }
    getPersonByNumId( numberId:string):Observable<Student>{
        return this._http.get<Student>("api/student/"+numberId)
    }
    
    postPerson(person:Person):Observable<number>{
     return this._http.post<number>("api/student/",person)   
    }
    putPerson(person:Person):Observable<Student>{
        return this._http.put<Student>("api/student/",person)
    }
    deletePerson(id:number){
        return this._http.delete("api/student/"+id)
    }
    getallStudenYears():Observable<StudentYear[]>{
        return this._http.get<StudentYear[]>("api/student/")
    }
    getStudentYearById( id:number):Observable<StudentYear>{
        return this._http.get<StudentYear>("api/student/"+id)
    }
    
    postStudentYear(studentyear:StudentYear):Observable<number>{
     return this._http.post<number>("api/student/",studentyear)   
    }
    putStudentYear(studentyear:StudentYear):Observable<Student>{
        return this._http.put<Student>("api/student/",studentyear)
    }
    deleteStudentYear(id:number){
        return this._http.delete("api/student/"+id)
    }
    
    constructor(private _http : HttpClient){
    
    }
    }