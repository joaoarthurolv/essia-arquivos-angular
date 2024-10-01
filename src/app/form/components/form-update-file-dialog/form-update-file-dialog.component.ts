import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ArquivosService } from '../../../diretorios/services/arquivos.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-update-file-dialog',
  standalone: true,
  imports: [MatDialogContent, MatLabel, MatDialogActions, MatFormField, ReactiveFormsModule, MatDialogClose, MatInputModule, MatDialogTitle, MatButtonModule],
  templateUrl: './form-update-file-dialog.component.html',
  styleUrl: './form-update-file-dialog.component.scss'
})
export class FormUpdateFileDialogComponent implements OnInit {
  form: FormGroup;

  private _snackBar = inject(MatSnackBar);

  constructor(
    private formBuilder: FormBuilder,
    private service: ArquivosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      idArquivo: [this.data.idArquivo],
      idDiretorio: [this.data.idDiretorio],
      nomeArquivo: [this.data.nomeArquivo]
    })
  }

  onSubmit() {
    let object = this.form.value;
    object.idDiretorioPai = object.idDiretorio;
    delete object.idDiretorio;

    this.service.update(this.form.value).subscribe(() => {
      this._snackBar.open('Arquivo atualizado', 'Fechar', {
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
