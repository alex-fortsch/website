import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css']
})
export class TypingTextComponent implements OnInit {
  @Input() textToType: string = 'Hello, this is a typing animation!';
  typedText: string = '';
  typingSpeed: number = 100; // Adjust the typing speed as per your preference (in milliseconds)

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let index = 0;
    const typeInterval = setInterval(() => {
      this.typedText += this.textToType[index];
      index++;
      if (index >= this.textToType.length) {
        clearInterval(typeInterval);
      }
    }, this.typingSpeed);
  }
}
