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
  selector: 'app-form-file-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormField, MatLabel, ReactiveFormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatInputModule],
  templateUrl: './form-file-dialog.component.html',
  styleUrl: './form-file-dialog.component.scss'
})
export class FormFileDialogComponent implements OnInit {
  form: FormGroup;

  private _snackBar = inject(MatSnackBar);

  constructor(
    private formBuilder: FormBuilder,
    private service: ArquivosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      idDiretorio: [this.data.idDiretorio],
      nomeArquivo: [null]
    })
  }

  onSubmit() {
    let object = this.form.value;
    object.idDiretorioPai = object.idDiretorio;
    delete object.idDiretorio;

    this.service.save(this.form.value).subscribe(() => {
      this._snackBar.open('Arquivo adicionado', 'Fechar', {
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
