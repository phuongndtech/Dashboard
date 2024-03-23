import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducePriceComponent } from './produce-price.component';

describe('ProducePriceComponent', () => {
  let component: ProducePriceComponent;
  let fixture: ComponentFixture<ProducePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducePriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
