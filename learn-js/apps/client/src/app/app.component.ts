import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'web-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  counter = 0;
  incrementCount() {
    this.counter ++;
  }
}
