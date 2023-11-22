import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentsPageComponent } from './manage-students-page.component';

describe('ManageStudentsPageComponent', () => {
  let component: ManageStudentsPageComponent;
  let fixture: ComponentFixture<ManageStudentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStudentsPageComponent]
    });
    fixture = TestBed.createComponent(ManageStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
