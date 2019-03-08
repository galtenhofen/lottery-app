import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEntriesComponent } from './completed-entries.component';

describe('CompletedEntriesComponent', () => {
  let component: CompletedEntriesComponent;
  let fixture: ComponentFixture<CompletedEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
