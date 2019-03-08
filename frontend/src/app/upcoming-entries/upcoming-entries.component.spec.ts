import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEntriesComponent } from './upcoming-entries.component';

describe('UpcomingEntriesComponent', () => {
  let component: UpcomingEntriesComponent;
  let fixture: ComponentFixture<UpcomingEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
