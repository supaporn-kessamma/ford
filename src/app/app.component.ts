import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web support FORD';
  
  active = 1;
  tabs = [
    {tab: 1, name: 'Star Info'},
    {tab: 2, name: 'Inquiries Info'},
    {tab: 3, name: 'Hierarchy Info'},
    {tab: 4, name: 'FAQ'},
  ];
  tabpanels = this.tabs[0];

}
