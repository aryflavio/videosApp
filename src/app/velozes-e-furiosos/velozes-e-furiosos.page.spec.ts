import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VelozesEFuriososPage } from './velozes-e-furiosos.page';

describe('VelozesEFuriososPage', () => {
  let component: VelozesEFuriososPage;
  let fixture: ComponentFixture<VelozesEFuriososPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VelozesEFuriososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VelozesEFuriososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
