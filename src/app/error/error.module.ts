import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorDialogComponent
  ],
  exports: [ErrorDialogComponent]
})
export class ErrorModule { }
