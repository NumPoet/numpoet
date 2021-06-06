import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContacPage } from './contac.page';

describe('ContacPage', () => {
  let component: ContacPage;
  let fixture: ComponentFixture<ContacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
