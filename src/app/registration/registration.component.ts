import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalModule } from '@sweetalert2/ngx-sweetalert2/lib/sweetalert2-loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  submit(){
    Swal.fire("Success","Registration Completed","success");

    this.router.navigate(['welcome']);
  }

}
