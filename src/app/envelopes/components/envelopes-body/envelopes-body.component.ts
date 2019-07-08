import { Component, OnInit } from '@angular/core';
import { EnvelopesDataService } from '../../services/envelopes-data.service';

@Component({
  selector: 'moneteer-envelopes-body',
  templateUrl: './envelopes-body.component.html',
  styleUrls: ['./envelopes-body.component.scss']
})
export class EnvelopesBodyComponent implements OnInit {

  constructor(public dataService: EnvelopesDataService) { }

  ngOnInit() {
      
  }

}
