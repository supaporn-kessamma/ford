import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-info',
  templateUrl: './star-info.component.html',
  styleUrls: ['./star-info.component.css']
})
export class StarInfoComponent implements OnInit {

  starId = '';
  firstname = '';
  lastname = '';
  mobile = '';
  status = 'A';
  positon = '';
  createDate = '';
  deleteDate = '';
  password = '';
  dealerCose = '';

  searchText = '';
  statusType = [
    { value: 'A', viewValue: 'active' },
    { value: 'I', viewValue: 'inactine' },
  ];

  items = []

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

  processData() {
  }
}
