import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("isuserlogged","");
    localStorage.setItem("usrToken",""),
    localStorage.setItem("usrName",""),
    localStorage.setItem("usrEmail",""),
    localStorage.setItem("userID",""),
    localStorage.setItem("usrRoles","");
    location.replace("/user/login");
  }

}
