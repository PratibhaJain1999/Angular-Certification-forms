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
 
  
 
 
 
  
}
