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
  loading=false;
  success=false;
  error=false;
  errorMsg='any';
  isLoading=false;


  constructor(private authserv:AuthserviceService) { }

  ngOnInit(): void {
  }
  formAdded(addForm:NgForm){
    console.log(addForm);
    const email=addForm.value.email;
    const password=addForm.value.password;
    addForm.reset();
    this.isLoading=true

    this.authserv.signingUpForm(email,password).subscribe(dataResponse => {
     console.log(dataResponse);
     this.error=false;
     this.success=true;
     this.isLoading=false;
     if(this.success==true){
      Swal.fire(
        'Successfully',
        'You are successfully registered',
        'success'
      )
    }

   
    },
    errorMeesage =>{
      this.error=true
    this.success=false 
    this.isLoading=false
    if(this.error==true ){
      Swal.fire(
        'Error',
        ' not Registered Successfully..!!',
        'error'
      )
      this.errorMsg=errorMeesage

    }
   
        
    },
   
    
    )
    if(this.register== false){
      this.error=false;
      this.success=true;
      this.isLoading=false;
      {
       Swal.fire(
         'Successfully',
         'Login successfully..!!',
         'success'
       )
     }
 
    //   (     errorMeesage: string) =>{
    //   this.error=true
    // this.success=false 
    // this.isLoading=false
    // if(this.error==true && this.register==false){
    //   Swal.fire(
    //     'Error',
    //     ' Not Login  Successfully..!!',
    //     'error'
    //   )
    //   this.errorMsg=errorMeesage

    // }
   
        
    // }
   
    
     }

 
    
         
     }

  

  
  changeMode(){
    this.register=!this.register
   
      
    }

  
  }



