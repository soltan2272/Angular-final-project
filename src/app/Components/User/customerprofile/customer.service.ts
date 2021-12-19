import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
// import { ApiService } from 'src/app/Services/shared/api.service';
import { CustomerViewModel } from './viewModel/cutomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {;
  // constructor(private apiService:ApiService) { }

  update(body: CustomerViewModel) {
    // return this.apiService.post(`edituser`, body);
  }
  getByID(ID:any) {
    // return this.apiService.get(`getuser/${ID}`);
  }
}
