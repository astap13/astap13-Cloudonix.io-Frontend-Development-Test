import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryItemDescriptionComponent } from './library-item-description.component';

describe('LibraryItemDescriptionComponent', () => {
  let component: LibraryItemDescriptionComponent;
  let fixture: ComponentFixture<LibraryItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryItemDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
