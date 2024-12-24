import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPersonBreastfeeding, faStairs, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-block2',
  imports: [FontAwesomeModule],
  templateUrl: './block2.component.html',
  styleUrl: './block2.component.css'
})
export class Block2Component {
  easy = faPersonBreastfeeding;
  steps = faStairs;
  access = faMobileScreen;
}
