import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'moneteer-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @HostBinding('attr.hidden')
  @Input()
  public open: boolean;

  @Input()
  public closable: boolean;

  @Input()
  public title: string;

  ngOnInit() {
    
  }

}
