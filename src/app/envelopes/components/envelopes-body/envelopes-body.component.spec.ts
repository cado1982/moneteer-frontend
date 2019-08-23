import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesBodyComponent } from './envelopes-body.component';
import { EnvelopesCategoriesComponent } from '../envelopes-categories/envelopes.categories.component';
import { EnvelopeDetailsComponent } from '../envelope-details/envelope-details.component';
import { EnvelopesDataService } from '../../services/envelopes-data.service';

describe('EnvelopesBodyComponent', () => {
  let component: EnvelopesBodyComponent;
  let fixture: ComponentFixture<EnvelopesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesBodyComponent, EnvelopesCategoriesComponent, EnvelopeDetailsComponent ],
      providers: [EnvelopesDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
