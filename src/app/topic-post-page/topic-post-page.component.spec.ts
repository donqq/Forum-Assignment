import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPostPageComponent } from './topic-post-page.component';

describe('TopicPostPageComponent', () => {
  let component: TopicPostPageComponent;
  let fixture: ComponentFixture<TopicPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
