import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/Services/ContactusService/contactus.service';
import { Icontact } from 'src/app/ViewModels/icontact/icontact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contact:Icontact={}as Icontact;
  // contactform !: FormGroup;
  
  constructor(private contactusService:ContactusService , private router:Router ,private fb: FormBuilder) { }

  ngOnInit(): void {
  //   this.contactform = this.fb.group({
     
  //     Name: ['', Validators.required],
  //     Email: ['', Validators.required],
  //     Subject: ['', Validators.required],
  //     Message: ['', Validators.required]
  // });
}

onSubmit()

{

  //alert("jjj");
  // console.log(this.contactform.controls["Name"].value);
  // console.log(this.contactform.controls["Email"].value);
  // console.log(this.contact);

  // this.contact.Email = this.contactform.controls["Name"].value;
  // this.contact.Name = this.contactform.controls["Email"].value;
  // this.contact.Subject = this.contactform.controls["Subject"].value;
  // this.contact.Message = this.contactform.controls["Message"].value;
  // console.log(this.contact)
  // this.contactusService.AddContactUS(this.contact).subscribe({
  //   next: (res) => {
  //     alert("Thank You For Contact US .....");
  //   }
  // })
}



  Addcontact() {
    console.log(this.contact);
    this.contactusService.AddContactUS(this.contact).subscribe({
      next: (res) => {
        alert("Thank You For Contact US .....");
        this.router.navigate(['/home'])
      }
    })
  }
}
