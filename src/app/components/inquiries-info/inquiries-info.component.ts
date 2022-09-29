import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiries-info',
  templateUrl: './inquiries-info.component.html',
  styleUrls: ['./inquiries-info.component.css']
})
export class InquiriesInfoComponent implements OnInit {

  bookingId = '';
  bookingNo = '';
  leadSource = '';
  bookingDate = '';
  editedDate = '';
  deletedDate = '';
  model = '';
  bodyStyle = '';
  car = '';
  dealerCose = '';
  exterior = '';
  interior = '';
  entityCode = '';
  mmy = '';
  mmyOption = '';
  dateBuy = '';
  paymentMethod = '';
  interestRate = '';
  noOfMonth = '';
  downPayment = '';
  finance = '';
  dmsbooking = '';
  isLock = '';
  lastStaff = '';
  status = '';
  delivered = '';
  vin = '';

  bpid: any;
  name: any;
  phone: any;
  province: any;
  ampher: any;
  tambol: any;
  soi: any;
  road: any;
  postCode: any;

  searchText = '';
  statusType = [
    { value: 'A', viewValue: 'active' },
    { value: 'I', viewValue: 'inactine' },
  ];

  enquiries = [
    {
      name: 'ใหม่',
      date: '2022/09/29',
      detail: 'เลขที่ใบเสนอราคา'
    }
  ];
  bookings = [
    {
      name: '-',
      date: '-',
      detail: '-'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

  processData() {
  }
}