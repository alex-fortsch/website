import { Component } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  welcomeMessage: string = 'Here are some projects that I have worked on';


}
