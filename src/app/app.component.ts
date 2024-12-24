import { Component } from '@angular/core';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block3Component } from './block3/block3.component';

@Component({
  selector: 'app-root',
  imports: [Block1Component, Block2Component, Block3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-1';
}
