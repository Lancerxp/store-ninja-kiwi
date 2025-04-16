import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloonListComponent } from './bloon-list.component';

describe('BloonListComponent', () => {
  let component: BloonListComponent;
  let fixture: ComponentFixture<BloonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
