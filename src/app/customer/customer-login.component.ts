import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
    // selector:"customer-login",
    templateUrl:"./customer-login.component.html"
})
export class CustomerLoginComponent implements OnInit{
    customer: Customer;
    
    ngOnInit(){
        this.customer = new Customer();
    }
}
