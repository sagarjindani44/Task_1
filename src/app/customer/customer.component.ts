import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'customer',
  standalone: true,
  imports: [
    TabViewModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    InputNumberModule,
    HttpClientModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
userForm = this.fb.group({
  name:['', Validators.required],
  companyType:[''],
  phnNum:['', [Validators.required]],
  email:['', [Validators.required,Validators.email]],
  address:this.fb.array([
    this.createAddress()
  ])
})

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
   
  }

  createAddress(){
    return this.fb.group({
      address:['', Validators.required],
      option:[''],
      postalCode:['']
    })
  }

getAddress(form:any){
  return form.controls.address.controls;
}

  addUser(){
    console.log(this.userForm)
  }

  addAddress(){
    debugger;
    const control = <FormArray>this.userForm.get('address');
    control.push(this.createAddress());
  }

  removeAddress(index:number){
const control = this.userForm.controls['address'];
control.removeAt(index)
  }


  
}
