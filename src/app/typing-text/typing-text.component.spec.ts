import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTextComponent } from './typing-text.component';

describe('TypingTextComponent', () => {
  let component: TypingTextComponent;
  let fixture: ComponentFixture<TypingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingTextComponent]
    });
    fixture = TestBed.createComponent(TypingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
