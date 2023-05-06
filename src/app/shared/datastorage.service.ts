import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppservicesService } from '../appservices.service';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(private http:HttpClient,private appServices:AppservicesService) { }
  // dataStorage(){
  //   const gridList=this.appServices.getGridList();
  //   this.http.post('https://pratibha-e05a5-default-rtdb.firebaseio.com/gridList.json',gridList).subscribe(responsiveData=>{

  //   })
  //  }

  //  fetchRecipes() {
  //   this.http.get('https://pratibha-e05a5-default-rtdb.firebaseio.com/gridList.json').subscribe(responsiveData=>{
  //   // this.appServices.setValue(responsiveData);
  //   })
  //  }
}
