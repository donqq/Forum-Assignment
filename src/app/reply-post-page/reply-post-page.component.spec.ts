import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyPostPageComponent } from './reply-post-page.component';

describe('ReplyPostPageComponent', () => {
  let component: ReplyPostPageComponent;
  let fixture: ComponentFixture<ReplyPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
