import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepositoriesItemComponent } from './list-repositories-item.component';

describe('ListRepositoriesItemComponent', () => {
  let component: ListRepositoriesItemComponent;
  let fixture: ComponentFixture<ListRepositoriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRepositoriesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepositoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
