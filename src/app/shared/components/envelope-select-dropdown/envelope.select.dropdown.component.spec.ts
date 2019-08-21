import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeSelectDropdownComponent } from './envelope.select.dropdown.component';
import { DropdownComponent } from '..';
import { FormsModule } from '@angular/forms';

describe('EnvelopeSelectDropdownComponent', () => {
  let component: EnvelopeSelectDropdownComponent;
  let fixture: ComponentFixture<EnvelopeSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeSelectDropdownComponent, DropdownComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
