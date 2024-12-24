import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  val = '_default_';
  condition = true;
  toogleCondition() { this.condition = !this.condition }
}
