import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRecipeComponent } from './filter-recipe.component';

describe('FilterRecipeComponent', () => {
  let component: FilterRecipeComponent;
  let fixture: ComponentFixture<FilterRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterRecipeComponent]
    });
    fixture = TestBed.createComponent(FilterRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
