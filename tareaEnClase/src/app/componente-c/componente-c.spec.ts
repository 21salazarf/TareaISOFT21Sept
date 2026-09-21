import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteC } from './componente-c';

describe('ComponenteC', () => {
  let component: ComponenteC;
  let fixture: ComponentFixture<ComponenteC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteC],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
