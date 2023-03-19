import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register=true;
  loading=false

  constructor(private authserv:AuthserviceService) { }

  ngOnInit(): void {
  }
  formAdded(addForm:NgForm){
    console.log(addForm);
    const email=addForm.value.email;
    const password=addForm.value.password;
    addForm.reset();
    this.loading=true

    this.authserv.signingUpForm(email,password).subscribe(dataResponse => {
     console.log(dataResponse);
     this.loading=false
    
    },
   
    
    )
   
     }
    

  
  registerr(){
    if(this.register==true){
      Swal.fire(
        'Successfully',
        'Your successfully registered',
        'success'
      )
    }
   
  }
  
  changeMode(){
    this.register=!this.register
   
      Swal.fire(
        'error',
        'Your are not registered properly',
        'error'
      )
    }

  
  }



