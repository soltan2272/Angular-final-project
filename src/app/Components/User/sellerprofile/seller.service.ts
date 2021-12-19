import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
// import { ApiService } from 'src/app/Services/shared/api.service';
import { sellerViewModel } from './viewModel/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {;
  // constructor(private apiService:ApiService) { }

  update(body: sellerViewModel) {
    // return this.apiService.post(`edituser`, body);
  }
  getByID(ID:any) {
    // return this.apiService.get(`getuser/${ID}`);
  }
}
