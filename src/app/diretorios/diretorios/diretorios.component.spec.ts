import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretoriosComponent } from './diretorios.component';

describe('DiretoriosComponent', () => {
  let component: DiretoriosComponent;
  let fixture: ComponentFixture<DiretoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretoriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
