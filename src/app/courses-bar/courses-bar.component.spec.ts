import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBarComponent } from './courses-bar.component';

describe('CoursesBarComponent', () => {
  let component: CoursesBarComponent;
  let fixture: ComponentFixture<CoursesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
