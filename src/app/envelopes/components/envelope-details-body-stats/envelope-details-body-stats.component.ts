import { Component, OnInit } from '@angular/core';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

@Component({
  selector: 'moneteer-envelope-details-body-stats',
  templateUrl: './envelope-details-body-stats.component.html',
  styleUrls: ['./envelope-details-body-stats.component.scss']
})
export class EnvelopeDetailsBodyStatsComponent implements OnInit {

  constructor(public selectionService: EnvelopesSelectionService) { }

  ngOnInit() {
  }

}
