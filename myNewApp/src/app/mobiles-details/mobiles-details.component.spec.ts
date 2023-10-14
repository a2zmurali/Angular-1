import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDetailsComponent } from './mobiles-details.component';

describe('MobilesDetailsComponent', () => {
  let component: MobilesDetailsComponent;
  let fixture: ComponentFixture<MobilesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
