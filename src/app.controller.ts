import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("writeFile/:nombreArchivo/:texto")
  async writeFile(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.writeFile(nombreArchivo, texto);
    return resultado;
  }

  @Get("appendFile/a/:nombreArchivo/:texto")
  async appendFileA(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.appendFile(nombreArchivo, texto, 'a');
    return resultado;
  }

  @Get("appendFile/w/:nombreArchivo/:texto")
  async appendFileW(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.appendFile(nombreArchivo, texto, 'w');
    return resultado;
  }

  @Get("openFile/write/w/:nombreArchivo/:texto")
  async writeWithOpenFileW(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.writeWithOpenFile(nombreArchivo, texto, 'w');
    return resultado;
  }

  @Get("openFile/write/a/:nombreArchivo/:texto")
  async writeWithOpenFileA(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.writeWithOpenFile(nombreArchivo, texto, 'a');
    return resultado;
  }

  @Get("readFile/:nombreArchivo")
  async readFile(@Param("nombreArchivo") nombreArchivo: string): Promise<string> {
    const resultado = await this.appService.readFile(nombreArchivo);
    return resultado;
  }

  @Get("writeFileBase64/:nombreArchivo/:texto")
  async writeFileBase64(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
    const resultado = await this.appService.writeFileBase64(nombreArchivo, texto);
    return resultado;
  }

  @Get("rename/:nombreArchivo/:nombreNuevo")
  async rename(@Param("nombreArchivo") nombreArchivo: string, @Param("nombreNuevo") nombreNuevo: string): Promise<string> {
    const resultado = await this.appService.rename(nombreArchivo, nombreNuevo);
    return resultado;
  }

  @Get("copy/:nombreArchivo/:nombreNuevo")
  async copy(@Param("nombreArchivo") nombreArchivo: string, @Param("nombreNuevo") nombreNuevo: string): Promise<string> {
    const resultado = await this.appService.copy(nombreArchivo, nombreNuevo);
    return resultado;
  }

  @Get("unlink/:rutaArchivo")
  async unlink(@Param("rutaArchivo") rutaArchivo: string): Promise<string> {
    const resultado = await this.appService.unlink(rutaArchivo);
    return resultado;
  }

  @Get("mkdir/:rutaDirectorio")
  async mkdir(@Param("rutaDirectorio") rutaDirectorio: string): Promise<string> {
    const resultado = await this.appService.mkdir(rutaDirectorio);
    return resultado;
  }

  @Get("rmdir/:rutaDirectorio")
  async rmdir(@Param("rutaDirectorio") rutaDirectorio: string): Promise<string> {
    const resultado = await this.appService.rmdir(rutaDirectorio);
    return resultado;
  }

  @Post("writeFileWithDirectory/:rutaArchivo/:texto")
  @ApiBody({})
  async writeFileWithDirectory(@Body() body): Promise<string> {
    const rutaArchivo = body.rutaArchivo;
    const texto = body.texto;
    const resultado = await this.appService.writeFileWithDirectory(rutaArchivo, texto);
    return resultado;
  }

  

}
