import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JujutsuKaisenPage } from './jujutsu-kaisen.page';

describe('JujutsuKaisenPage', () => {
  let component: JujutsuKaisenPage;
  let fixture: ComponentFixture<JujutsuKaisenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JujutsuKaisenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JujutsuKaisenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
