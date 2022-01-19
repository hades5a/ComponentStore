import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzawithcstoreComponent } from './pizzawithcstore.component';

describe('PizzawithcstoreComponent', () => {
  let component: PizzawithcstoreComponent;
  let fixture: ComponentFixture<PizzawithcstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzawithcstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzawithcstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
