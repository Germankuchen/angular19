import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  oculto = '';

  constructor(private modalService: ModalUploadService) {
    console.log('cargo el modal upload');
  }

  ocultar() {
    this.oculto = 'oculto';
  }

  ngOnInit() {
  }

}
