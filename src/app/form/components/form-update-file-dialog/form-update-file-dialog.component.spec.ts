import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateFileDialogComponent } from './form-update-file-dialog.component';

describe('FormUpdateFileDialogComponent', () => {
  let component: FormUpdateFileDialogComponent;
  let fixture: ComponentFixture<FormUpdateFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUpdateFileDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
