import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryItemEditModeProfileComponent } from './library-item-edit-mode-profile.component';

describe('LibraryItemEditModeProfileComponent', () => {
  let component: LibraryItemEditModeProfileComponent;
  let fixture: ComponentFixture<LibraryItemEditModeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryItemEditModeProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryItemEditModeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
