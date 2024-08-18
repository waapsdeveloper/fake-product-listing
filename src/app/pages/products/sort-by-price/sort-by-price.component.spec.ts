import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByPriceComponent } from './sort-by-price.component';

describe('SortByPriceComponent', () => {
  let component: SortByPriceComponent;
  let fixture: ComponentFixture<SortByPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortByPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
