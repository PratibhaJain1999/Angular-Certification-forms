import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridListService } from './grid-list/grid-list.service';
import { projectModel } from './project-form/project model';

@Injectable({
  providedIn: 'root'

})

export class AppservicesService {
  private formsList!:BehaviorSubject<projectModel>

  dataForm:any=[]

  constructor(private http:HttpClient){
    this.formsList = new BehaviorSubject<projectModel>(this.dataForm);

  }

  getGridList(){
    return this.http.get('https://gorest.co.in/public/v2/comments')

  }
  saveGridList(gridList:any[]){;
     return this.http.put('https://certification-forms-default-rtdb.firebaseio.com/gridList.json',gridList).subscribe(res => res)
       ;
  }
  fetchGridList(){
    return this.http.get('https://certification-forms-default-rtdb.firebaseio.com/gridList.json')
  }

//   upDateList(form:any){
//     this.dataForm=form;

//   }
//   setValue(value:any) {
//     this.formsList.next(value);
// }

// getValue() : Observable<projectModel> {
//     return this.formsList.asObservable();
// }




  

 }
 
 
  



