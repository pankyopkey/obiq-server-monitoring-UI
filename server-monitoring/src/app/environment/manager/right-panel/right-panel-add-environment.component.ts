import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-right-panel-add-environment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-panel-add-environment.component.html',
  styleUrl: './right-panel-add-environment.component.scss'
})
export class RightPanelAddEnvironmentComponent {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  close_model() {
    this.activeModal.dismiss('close modal');
  }

}