import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-library-item-edit-mode-profile',
  templateUrl: './library-item-edit-mode-profile.component.html',
  styleUrl: './library-item-edit-mode-profile.component.scss'
})
export class LibraryItemEditModeProfileComponent {
  @Input() profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.profileForm) {
      this.profileForm = this.fb.group({
        type: 'furniture',
        available: true,
        backlog: ''
      });
    }
  }
}