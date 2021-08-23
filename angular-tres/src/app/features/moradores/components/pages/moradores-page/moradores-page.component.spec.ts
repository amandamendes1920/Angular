import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoresPageComponent } from './moradores-page.component';

describe('MoradoresPageComponent', () => {
  let component: MoradoresPageComponent;
  let fixture: ComponentFixture<MoradoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoradoresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
