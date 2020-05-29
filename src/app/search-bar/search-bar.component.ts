import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
 // selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  encapsulation: ViewEncapsulation.Native,
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
