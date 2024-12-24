import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChrome, faAndroid } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-block1',
  imports: [FontAwesomeModule],
  templateUrl: './block1.component.html',
  styleUrl: './block1.component.css'
})
export class Block1Component {
  text = "Лёгкие и вкусные рецепты для всех";
  android = "OS Android";
  chrome = "Web версия";

  androidIcon = faAndroid;
  chromeIcon = faChrome;
}
