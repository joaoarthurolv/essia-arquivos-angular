import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DiretoriosService } from '../../../diretorios/services/diretorios.service';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, FormsModule, MatLabel, ReactiveFormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatInputModule],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.scss'
})
export class FormDialogComponent implements OnInit{

  form: FormGroup;

  private _snackBar = inject(MatSnackBar);

  constructor(
    private formBuilder: FormBuilder,
    private service: DiretoriosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      idDiretorio: [this.data.idDiretorio],
      nomeDiretorio: [null]
    })
  }

  onSubmit() {
    let object = this.form.value;
    object.idDiretorioPai = object.idDiretorio;
    delete object.idDiretorio;

    this.service.save(object).subscribe(() => {
      this._snackBar.open('Diretório adicionado', 'Fechar', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
    }
  );
  }

  ngOnInit(): void {

  }
}
