import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfreyjaComponent } from './cfreyja.component';

describe('CfreyjaComponent', () => {
  let component: CfreyjaComponent;
  let fixture: ComponentFixture<CfreyjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfreyjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfreyjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
