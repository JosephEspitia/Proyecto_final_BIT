import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptCourseComponent } from './java-script-course.component';

describe('JavaScriptCourseComponent', () => {
  let component: JavaScriptCourseComponent;
  let fixture: ComponentFixture<JavaScriptCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
