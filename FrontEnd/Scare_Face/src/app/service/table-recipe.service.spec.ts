import { TestBed } from '@angular/core/testing';

import { TableRecipeService } from './table-recipe.service';

describe('TableRecipeService', () => {
  let service: TableRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
