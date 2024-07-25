import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePollComponent } from './single-poll.component';

describe('SinglePollComponent', () => {
  let component: SinglePollComponent;
  let fixture: ComponentFixture<SinglePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
