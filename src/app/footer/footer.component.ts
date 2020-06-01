import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer>
          <p>&copy; 2020 ACME</p>
      </footer>
  `,
  styles: ['p {color: white; text-align: center}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
