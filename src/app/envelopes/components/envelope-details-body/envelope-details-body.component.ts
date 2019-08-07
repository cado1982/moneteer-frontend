import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moneteer-envelope-details-body',
  templateUrl: './envelope-details-body.component.html',
  styleUrls: ['./envelope-details-body.component.scss'],
  host: {
      "class": "d-inline-flex flex-column border-bottom border-right border-left"
  }
})
export class EnvelopeDetailsBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
