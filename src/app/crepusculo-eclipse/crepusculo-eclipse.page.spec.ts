import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrepusculoEclipsePage } from './crepusculo-eclipse.page';

describe('CrepusculoEclipsePage', () => {
  let component: CrepusculoEclipsePage;
  let fixture: ComponentFixture<CrepusculoEclipsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrepusculoEclipsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrepusculoEclipsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
