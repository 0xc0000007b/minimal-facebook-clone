import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {FeedsTogglerComponent} from './feeds-toggler.component';

describe('FeedsTogglerComponent', () => {
  let component: FeedsTogglerComponent;
  let fixture: ComponentFixture<FeedsTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedsTogglerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      FeedsTogglerComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createPost', () => {
    expect(component).toBeTruthy();
  });
});
