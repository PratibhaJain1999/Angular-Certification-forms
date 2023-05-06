import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { AppservicesService } from '../appservices.service';
import { projectModel } from '../project-form/project model';
import { GridListService } from './grid-list.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  mode='grid'
  gridForm=true
  gridlist:any=[
    {
      id:'',
      post_id:'',
      name:'',
      email:'',
      body:'',
      coverImage:'',

    }
  ]
  @Input()addGrid:any
  @Input()addList:any

  @Output()deleteList=new EventEmitter();
  @Output() gridListView=new EventEmitter()
  @Output() gridListAdd=new EventEmitter()
  @Input() griddddlisttt:any;
  @Input() theProjectListArray:any;
  
  constructor( ) { }

  ngOnInit(): void {
  
  }
  ngOnChanges(changes:SimpleChanges) {
   
    if (changes['theProjectListArray'] && changes['theProjectListArray'].currentValue){
      this.gridlist=changes['theProjectListArray'].currentValue
    }
    if (changes['addList'] && changes['addList'].currentValue)
    {
        this.gridlist.push(changes['addList'].currentValue )

    }
    

  }
  gridlists(){

    
    if(this.mode=='grid'){
      this.mode='list'
    }
    else{
      this.mode='grid'
    }
    
  }
  delete(items:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        console.log(items);
        let index=this.gridlist.indexOf(items)
        this.gridlist.splice(index,1)
      }
    
          
  
    })
  
  }

}
