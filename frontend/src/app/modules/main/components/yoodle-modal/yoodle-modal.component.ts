import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'ms-yoodle-modal',
  templateUrl: './yoodle-modal.component.html',
  styleUrls: ['./yoodle-modal.component.scss']
})
export class YoodleModalComponent {
  public constructor(
      private readonly _ref: MatDialogRef<YoodleModalComponent>
  ) {
  }

  public close(): void {
    this._ref.close();
  }
}
