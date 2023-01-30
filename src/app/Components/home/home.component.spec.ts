import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<div class="buttons">
<button mat-icon-button class="minus"><i class="material-icons">&#xe15b;</i></button>
<div class="cartqty">
    <h3>12</h3>
</div>
<button mat-icon-button class="plus"><i class="material-icons" style="margin-right: 20px;">&#xe145;</i></button>
</div>