import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnsComponent } from './forum-ans.component';

describe('ForumAnsComponent', () => {
  let component: ForumAnsComponent;
  let fixture: ComponentFixture<ForumAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
