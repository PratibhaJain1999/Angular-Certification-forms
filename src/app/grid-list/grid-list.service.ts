import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { projectModel } from '../project-form/project model';

@Injectable({
  providedIn: 'root'
})
export class GridListService {
  private gridList!:BehaviorSubject<projectModel[]>

  
  
  constructor(private http:HttpClient) { 
    
  }
 
  
<<<<<<< HEAD
//   setListValue(value:any) {
//     this.gridList.next(value);
// }

// getListVlaue() : Observable<projectModel[]> {
//     return this.gridList.asObservable();
// }
=======
 
>>>>>>> 73baabb41d6de6dadf2727d158f7ec3cbc273ba8
 
 
  
}
