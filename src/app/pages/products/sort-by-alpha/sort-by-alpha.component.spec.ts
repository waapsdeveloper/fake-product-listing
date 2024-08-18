import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByAlphaComponent } from './sort-by-alpha.component';

describe('SortByAlphaComponent', () => {
  let component: SortByAlphaComponent;
  let fixture: ComponentFixture<SortByAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortByAlphaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortByAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
