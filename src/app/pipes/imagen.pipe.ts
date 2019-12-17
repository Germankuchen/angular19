import { Pipe, PipeTransform } from '@angular/core';
import { BACKEND_URL } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo = 'usuario'): any {

    if (img.indexOf('https') !== -1) {
      return img;
    }
    if (tipo === 'usuario') {
      tipo = 'usuarios';
    }
    if (tipo === 'hospital') {
      tipo = 'hospitales';
    }
    if (tipo === 'medico') {
      tipo = 'medicos';
    }

    const path = BACKEND_URL + '/imagen/' + tipo + '/' + img;

    return path;
  }

}
