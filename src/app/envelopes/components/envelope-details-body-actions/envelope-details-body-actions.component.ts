import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moneteer-envelope-details-body-actions',
  templateUrl: './envelope-details-body-actions.component.html',
  styleUrls: ['./envelope-details-body-actions.component.scss']
})
export class EnvelopeDetailsBodyActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteCategory() {
      console.log("Delete category not implemented.");
  }

}
