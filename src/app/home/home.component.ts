import { Component } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage: string = 'Welcome to my website!';
}
