import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hierarchy-info',
  templateUrl: './hierarchy-info.component.html',
  styleUrls: ['./hierarchy-info.component.css']
})
export class HierarchyInfoComponent implements OnInit {

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

  starIdBoss = '';
  firstnameBoss = '';
  lastnameBoss = '';
  mobileBoss = '';
  statusBoss = 'A';
  positonBoss = '';
  createDateBoss = '';
  deleteDateBoss = '';
  passwordBoss = '';
  dealerCoseBoss = '';

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