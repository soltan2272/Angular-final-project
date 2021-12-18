import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotResultSearchComponent } from './not-result-search.component';

describe('NotResultSearchComponent', () => {
  let component: NotResultSearchComponent;
  let fixture: ComponentFixture<NotResultSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotResultSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotResultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
