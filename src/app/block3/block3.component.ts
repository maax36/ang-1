import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-block3',
  imports: [FontAwesomeModule],
  templateUrl: './block3.component.html',
  styleUrl: './block3.component.css'
})
export class Block3Component {
  download = faCircleArrowDown;
}
