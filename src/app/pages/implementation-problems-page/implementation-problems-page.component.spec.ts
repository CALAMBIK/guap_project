import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationProblemsPageComponent } from './implementation-problems-page.component';

describe('ImplementationProblemsPageComponent', () => {
  let component: ImplementationProblemsPageComponent;
  let fixture: ComponentFixture<ImplementationProblemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementationProblemsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementationProblemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
