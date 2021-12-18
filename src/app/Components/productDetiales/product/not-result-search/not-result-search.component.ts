import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-result-search',
  templateUrl: './not-result-search.component.html',
  styleUrls: ['./not-result-search.component.scss']
})
export class NotResultSearchComponent implements OnInit {

  searchtxt!:string;
  constructor(private activerouter: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {

    this.activerouter.paramMap.subscribe(param=>{
      this.searchtxt = String(param.get('search'))

    })
  }

}
