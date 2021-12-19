import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import * as moment from 'moment';
// import { CRUDCreatePage } from 'src/app/Models/shared/crud-create.model';
// import { SharedService } from 'src/app/Services/shared/shared.service';
import { SellerService } from '../seller.service';
import { sellerViewModel } from '../viewModel/seller.model';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.scss']
})
export class SellerprofileComponent implements OnInit {

  // page: CRUDCreatePage = new CRUDCreatePage();
  isEdit: boolean = false;
  model: sellerViewModel = new sellerViewModel();
  item: sellerViewModel = {} as sellerViewModel;

  constructor(
    // private _sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private _sellerService: SellerService,
  ) { }

  ngOnInit() {

  }

  // initializePage() {
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     this.page.isPageLoaded = false;
  //     if (params.has('id')) {
  //       this.model.id = +params.get("id");
  //       this.page.isEdit = this.model.id > 0;
  //     }
  //     if (this.page.isEdit) {
  //       this.getByID()
  //     }
  //     else
  //       this.createForm()
  //   });
  // }
  // getByID(){
  //   this._sellerService.getByID(this.model.id).subscribe((res)=>{
  //     if(res.ISuccessed){
  //       this.item = res.Data;
  //       this.model = this.item;
  //     }
  //     this.createForm()
  //   })
  // }
  // createForm() {
  //   this.page.form = this._sharedService.formBuilder.group({
  //     Full_Name: [this.model.Full_Name, [Validators.required]],
  //     Phone: [this.model.Phone, [Validators.required]],
  //     Adrress: [this.model.Adrress, [Validators.required]],
  //     Email: [this.model.Email, [Validators.required]],
  //     SSN: [this.model.SSN, [Validators.required]],
  //     Date_Of_Birth: [this.model.Date_Of_Birth, [Validators.required]],
  //   });
  //   this.page.isPageLoaded = true;
  // }
  // save() {
  //   this.page.isSaving = true;
  //   Object.assign(this.model, this.page.form.value);
  //   this.model.Date_Of_Birth = moment(this.model.Date_Of_Birth).format('YYYY-MM-DD');
  //   this._sellerService.update(this.model).subscribe(res => {
  //   this.page.responseViewModel = res;
  //     this.page.isSaving = false;
  //     this._sharedService.showToastr(res);
  //     if (res.ISuccessed) {

  //     }
  //   }, error => {
  //     this._sharedService.showErrorAlert(error);
  //     this.page.isSaving = false;
  //   }, () => { this.page.isSaving = false; });
  // }

  // isControlValidAndTouched(controlName: string) {
  //   let control = this.page.form.controls[controlName];
  //   return control.valid && control.touched;
  // }

  // isControlValidAndDirty(controlName: string) {
  //   let control = this.page.form.controls[controlName];
  //   return control.valid && control.dirty;
  // }

  // isControlNotValidAndDirty(controlName: string) {
  //   let control = this.page.form.controls[controlName];
  //   return !control.valid && control.dirty;
  // }

  // isControlHasError(controlName: string, error: string) {
  //   return this.page.form.controls[controlName].hasError(error);
  // }

  // disabledSubmit() {
  //   return this.page.isSaving || !this.page.form.valid;
  // }
  // get controls() {
  //   return this.page.form.controls;
  // }


}
