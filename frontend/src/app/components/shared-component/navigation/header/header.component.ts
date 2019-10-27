import { Component, OnInit } from '@angular/core';
import { applicationProperties } from 'src/app/properties/application.properties';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contactNumber: string;
  currencyCodes: string[];
  supportEmail: string;

  constructor() {

  }

  ngOnInit() {
    this.contactNumber = applicationProperties.contactNumber;
    this.currencyCodes = applicationProperties.currencyCodes;
    this.supportEmail = applicationProperties.supportEmail;
  }

}
