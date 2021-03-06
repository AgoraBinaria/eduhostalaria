import { Component } from '@angular/core';
import { SecurityService } from 'app/tools/security.service';

@Component({
  selector: 'ab-root',
  template: `
    <ab-shell></ab-shell>
  `,
  styles: []
})
export class AppComponent {
  constructor(private security: SecurityService) {
    this.security.checkBigbang();
  }
}
