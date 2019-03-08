import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEntriesComponent } from './live-entries.component';

describe('LiveEntriesComponent', () => {
  let component: LiveEntriesComponent;
  let fixture: ComponentFixture<LiveEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
