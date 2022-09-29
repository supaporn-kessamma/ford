import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  searchText = '';
  page = 0;
  pageSize = 5;

  versions = [
    { id: 1, version: 'LMS 1.4.2' },
    { id: 1, version: 'LMS 1.4.3' },
    { id: 1, version: 'DMS' },
    { id: 1, version: 'Wingspan' },
    { id: 1, version: 'LMS' },
    { id: 1, version: 'Web Report' },
  ];

  mocks = [
    { 
      Question: 'kkk',
      And: 'kkk And'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

  processData() {
  }
}
