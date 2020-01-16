import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string) {

    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('imagen', archivo, archivo.name);
      xhr.onreadystatechange = function() {
        // Finalizo de cargar el archivo
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Imagen subida correctamente');
            resolve(xhr.response);
          } else {
            console.log('Hubo un problema');
            reject(xhr.status);
          }
        }
      };
      const url = BACKEND_URL + '/upload/' + tipo + '/' + id;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });

  }

}
