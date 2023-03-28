import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {GlobalFeedComponent} from './tag-feed.component';

describe('GlobalFeedComponent', () => {
  let component: GlobalFeedComponent;
  let fixture: ComponentFixture<GlobalFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalFeedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createPost', () => {
    expect(component).toBeTruthy();
  });
});
