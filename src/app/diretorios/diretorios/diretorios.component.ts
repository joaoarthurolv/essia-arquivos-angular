import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNestedTreeNode, MatTree, MatTreeModule, MatTreeNode } from '@angular/material/tree';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../error/components/error-dialog/error-dialog.component';
import { FormDialogComponent } from '../../form/components/form-dialog/form-dialog.component';
import { FormFileDialogComponent } from '../../form/components/form-file-dialog/form-file-dialog.component';
import { Arquivo } from '../models/arquivo';
import { Diretorio } from '../models/diretorio';
import { Raiz } from '../models/raiz';
import { DiretoriosService } from '../services/diretorios.service';
import { ArquivosService } from '../services/arquivos.service';
import { FormUpdateFileDialogComponent } from '../../form/components/form-update-file-dialog/form-update-file-dialog.component';

@Component({
  selector: 'app-diretorios',
  standalone: true,
  imports: [MatCard, MatCardContent, MatTree, MatTreeNode, MatIconModule, MatNestedTreeNode, MatTreeModule, MatProgressSpinnerModule, ErrorDialogComponent, CommonModule, MatToolbar, MatDialogModule, MatFormField, MatLabel, MatButtonModule, MatDividerModule],
  templateUrl: './diretorios.component.html',
  styleUrl: './diretorios.component.scss'
})
export class DiretoriosComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);

  readonly animal = signal('');

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  diretorios$: Observable<Raiz> | null = null;

  constructor(
    private diretoriosService: DiretoriosService,
    private arquivosService: ArquivosService,
    public dialog: MatDialog
  ) {
    this.refresh();
  }

  refresh() {
    this.diretorios$ = this.diretoriosService.findAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar diretórios.')
          return of({ diretorios: [], arquivos: [] })
        })
      );
  }

  private _transformer = (node: Diretorio, level: number) => {
    return {
      expandable: !!node.diretoriosFilhos && node.diretoriosFilhos.length > 0,
      name: node.nomeDiretorio,
      level: level,
    };
  };

  childrenAccessor = (node: Diretorio) => node.diretoriosFilhos ?? [];

  hasChild = (_: number, node: Diretorio) => !!node.diretoriosFilhos && node.diretoriosFilhos.length > 0;

  hasFiles = (_: number, node: Diretorio) => !!node.arquivos && node.arquivos.length > 0;

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  addNode(node: Diretorio) {
    this.dialog.open(FormDialogComponent, {
      data: { nomeDiretorio: node.nomeDiretorio, idDiretorio: node.idDiretorio },
    }).afterClosed().subscribe(
      () => this.refresh());
  }

  addNodeRoot() {
    this.dialog.open(FormDialogComponent, {
      data: { nomeDiretorio: "" },
    }).afterClosed().subscribe(
      () => this.refresh());
  }

  editNode(node: Diretorio) {
    // Edit the selected node
    console.log('Edit', node.nomeDiretorio);
  }

  deleteNode(node: Diretorio) {
    this.diretoriosService.delete(node.idDiretorio).subscribe(
      () => {
        this._snackBar.open('Diretório removido', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
        this.refresh();
      }
    );
  }

  addFile(node: Arquivo) {
    this.dialog.open(FormFileDialogComponent, {
      data: { nomeArquivo: node.nomeArquivo, idDiretorio: node.idDiretorio},
    }).afterClosed().subscribe(
      () => this.refresh());
  }

  deleteFile(node: Arquivo){
    this.arquivosService.delete(node.idArquivo).subscribe(
      () => {
        this._snackBar.open('Arquivo removido', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
        this.refresh();
      }
    );
  }

  editFile(node: Arquivo) {
    this.dialog.open(FormUpdateFileDialogComponent, {
      data: { nomeArquivo: node.nomeArquivo, idDiretorio: node.idDiretorioPai, idArquivo: node.idArquivo},
    }).afterClosed().subscribe(
      () => this.refresh());
  }

  ngOnInit(): void {

  }

}
