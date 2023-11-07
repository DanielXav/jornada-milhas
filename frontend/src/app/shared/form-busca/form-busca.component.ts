import { FormBuscaService } from './../../core/serices/form-busca.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog,
    public FormBuscaService : FormBuscaService) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
