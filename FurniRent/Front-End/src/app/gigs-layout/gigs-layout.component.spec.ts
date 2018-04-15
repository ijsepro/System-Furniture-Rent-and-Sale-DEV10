import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsLayoutComponent } from './gigs-layout.component';

describe('GigsLayoutComponent', () => {
  let component: GigsLayoutComponent;
  let fixture: ComponentFixture<GigsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
