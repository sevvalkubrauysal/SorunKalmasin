import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BildirimlerPage } from './bildirimler.page';

describe('BildirimlerPage', () => {
  let component: BildirimlerPage;
  let fixture: ComponentFixture<BildirimlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildirimlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BildirimlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
