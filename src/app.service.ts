import { promises as apiArchivos } from 'fs';
import { Injectable } from '@nestjs/common';
import { FileHandle } from 'fs/promises';

@Injectable()
export class AppService {

  async writeFile(nombreArchivo: string, texto: string): Promise<string> {
    try {
      await apiArchivos.writeFile(`archivos/${nombreArchivo}.txt`, texto);
    } catch (error) {
      console.error('Error al escribir el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async appendFile(nombreArchivo: string, texto: string, flag: string): Promise<string> {
    try {
      await apiArchivos.appendFile(`archivos/${nombreArchivo}`, texto, { flag: flag });
    } catch (error) {
      console.error('Error al escribir el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async writeWithOpenFile(nombreArchivo: string, texto: string, flag: string): Promise<string> {
    try {
      const archivo : FileHandle = await apiArchivos.open(`archivos/${nombreArchivo}.txt`, flag);
      await archivo.write(texto);
      await archivo.close();
    } catch (error) {
      console.error('Error al escribir el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async readFile(nombreArchivo: string): Promise<string> {
    try {
      const buffer = await apiArchivos.readFile(`archivos/${nombreArchivo}`);
      console.log(buffer);
      const contenido = buffer.toString('base64');
      console.log(contenido);
      return contenido;
    } catch (error) {
      console.error('Error al leer el archivo');
      console.error(error);
      throw new Error('Error al leer el archivo');
    }
  }

  async writeFileBase64(nombreArchivo: string, texto: string): Promise<string> {
    try {
      await apiArchivos.writeFile(`archivos/${nombreArchivo}`, texto, "base64");
    } catch (error) {
      console.error('Error al escribir el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async rename(nombreArchivo: string, nombreNuevo: string): Promise<string> {
    try {
      await apiArchivos.rename(`archivos/${nombreArchivo}`, `../${nombreNuevo}`);
    } catch (error) {
      console.error('Error al renombrar el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async copy(nombreArchivo: string, nombreNuevo: string): Promise<string> {
    try {
      await apiArchivos.copyFile(`archivos/${nombreArchivo}`, `archivos/${nombreNuevo}`);
    } catch (error) {
      console.error('Error al copiar el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async unlink(rutaArchivo: string): Promise<string> {
    try {
      await apiArchivos.unlink(rutaArchivo);
    } catch (error) {
      console.error('Error al eliminar el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

  async mkdir(rutaDirectorio: string): Promise<string> {
    try {
      await apiArchivos.mkdir(rutaDirectorio, { recursive: true });
    } catch (error) {
      console.error('Error al crear directorio');
      console.error(error);
    }
    return 'Hello World!';
  }

  async rmdir(rutaDirectorio: string): Promise<string> {
    try {
      await apiArchivos.rmdir(rutaDirectorio);
    } catch (error) {
      console.error('Error al crear directorio');
      console.error(error);
    }
    return 'Hello World!';
  }

  async writeFileWithDirectory(rutaCompleta: string, texto: string): Promise<string> {
    try {
      const laUltimaBarra = rutaCompleta.lastIndexOf('/');
      const rutaDirectorio = rutaCompleta.substring(0, laUltimaBarra);
      await apiArchivos.mkdir(rutaDirectorio, { recursive: true });
      await apiArchivos.writeFile(rutaCompleta, texto);
    } catch (error) {
      console.error('Error al escribir el archivo');
      console.error(error);
    }
    return 'Hello World!';
  }

}
