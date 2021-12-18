import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSerComponent } from './product-ser.component';

describe('ProductSerComponent', () => {
  let component: ProductSerComponent;
  let fixture: ComponentFixture<ProductSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
