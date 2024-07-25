import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryItemEditModeComponent } from './library-item-edit-mode.component';

describe('LibraryItemEditModeComponent', () => {
  let component: LibraryItemEditModeComponent;
  let fixture: ComponentFixture<LibraryItemEditModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryItemEditModeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryItemEditModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
