import Chart from 'chart.js/auto';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
import * as FileSaver from 'file-saver';
import estudio from './estudio.json';
import pregunta from './pregunta.json';
import resultados from './resultados.json';
import preguntasCuestionario from './preguntasCuestionario.json';

class ExportDocument {
  constructor(estudioData, preguntaData, preguntasCuestionarioData) {
    this.estudioData = estudioData;
    this.preguntaData = preguntaData;
    this.preguntasCuestionarioData = preguntasCuestionarioData;
    this.workbook = new ExcelJS.Workbook();
  }




  // EXPORTACIÓN EXCEL

  async exportToExcel() {
    const workbook = new ExcelJS.Workbook();
    const ws1 = workbook.addWorksheet('Estudios');
    await this.addLogoToWorkbook(workbook);
    const columnA = ws1.getColumn('A');
    columnA.width = 40;
    columnA.font = { bold: true };

    //Estudios
    const cuestionarioCell = ws1.getCell('A5');
    cuestionarioCell.value = 'ESTUDIOS';
    cuestionarioCell.font = { bold: true };
    cuestionarioCell.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A5:B5');

    for(let i = 1; i <= 26; i++){ 
      ws1.getCell(5, i).fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{ argb:'FFD3D3D3' }
      };
    }

    ws1.getCell('A6').value = 'Nº Estudio';
    ws1.getCell('B6').value = this.estudioData.ficha.estudio.id;

    ws1.getCell('A7').value = 'Fecha';
    ws1.getCell('B7').value = this.estudioData.ficha.estudio.fecha;

    ws1.getCell('A8').value = 'Título';
    ws1.getCell('B8').value = this.estudioData.ficha.estudio.titulo;

    ws1.getCell('A9').value = 'Autor(es)';
    ws1.getCell('B9').value = this.estudioData.ficha.estudio.autores;

    ws1.getCell('A10').value = 'Encargo(es)';
    ws1.getCell('B10').value = this.estudioData.ficha.estudio.encargo;

    ws1.getCell('A11').value = 'País';
    ws1.getCell('B11').value = this.estudioData.ficha.estudio.pais;

    ws1.getCell('A12').value = 'Índice Temático';
    ws1.getCell('B12').value = this.estudioData.ficha.estudio.indiceTematico;
    ws1.mergeCells('B12:E12');
    ws1.getCell('B12').alignment = { wrapText: true, vertical: 'top', horizontal: 'left' };
    ws1.getRow(12).height = 300;

    //Cuestionarios
    const cuestionarioCell1 = ws1.getCell('A13');
    cuestionarioCell1.value = 'CUESTIONARIOS';
    cuestionarioCell1.font = { bold: true };
    cuestionarioCell1.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A13:B13');

    for(let i = 1; i <= 26; i++){ 
      ws1.getCell(13, i).fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{ argb:'FFD3D3D3' }
      };
    }

    const cuestionarios = this.estudioData.ficha.cuestionarios;
    let currentRow = 14;

    for (let cuestionario of cuestionarios) {
      ws1.getCell(`A${currentRow}`).value = 'Nº Cuestionario';
      ws1.getCell(`B${currentRow}`).value = cuestionario.numero;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Título';
      ws1.getCell(`B${currentRow}`).value = cuestionario.titulo;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Fecha de inicio';
      ws1.getCell(`B${currentRow}`).value = cuestionario.fecha_inicio;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Fecha de finalización';
      ws1.getCell(`B${currentRow}`).value = cuestionario.fecha_fin;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Tipo de entrevista';
      ws1.getCell(`B${currentRow}`).value = cuestionario.tipo_entrevista;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Variables Sociodemográficas';
      ws1.getCell(`B${currentRow}`).value = cuestionario.variables_sociodemograficas;
      currentRow++;

      ws1.getCell(`A${currentRow}`).value = 'Contenido';
      ws1.getCell(`B${currentRow}`).value = cuestionario.contenido;
      ws1.mergeCells(`B${currentRow}:E${currentRow}`);
      ws1.getCell(`B${currentRow}`).alignment = { wrapText: true, vertical: 'top', horizontal: 'left' };
      ws1.getRow(currentRow).height = 300;
      currentRow++;
    }


    //Muestras
    const cuestionarioCell2 = ws1.getCell('A21');
    cuestionarioCell2.value = 'MUESTRAS';
    cuestionarioCell2.font = { bold: true };
    cuestionarioCell2.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A21:B21');

    for(let i = 1; i <= 26; i++){ 
      ws1.getCell(21, i).fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{ argb:'FFD3D3D3' }
      };
    }

    const muestras = this.estudioData.ficha.muestras;
    let currentRow1 = 22;

    for (let muestra of muestras) {
      ws1.getCell(`A${currentRow1}`).value = 'Muestra';
      ws1.getCell(`B${currentRow1}`).value = muestra.nombre;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Ámbito';
      ws1.getCell(`B${currentRow1}`).value = muestra.ambito;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Universo';
      ws1.getCell(`B${currentRow1}`).value = muestra.universo;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Sexo';
      ws1.getCell(`B${currentRow1}`).value = muestra.sexo;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Edad';
      ws1.getCell(`B${currentRow1}`).value = muestra.edad;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Tamaño Real';
      ws1.getCell(`B${currentRow1}`).value = muestra.tamano_real;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Tamaño Teórico';
      ws1.getCell(`B${currentRow1}`).value = muestra.tamano_teorico;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Afijación';
      ws1.getCell(`B${currentRow1}`).value = muestra.afijacion;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Puntos de Muestreo';
      ws1.getCell(`B${currentRow1}`).value = muestra.puntos_muestreo;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Error Muestral';
      ws1.getCell(`B${currentRow1}`).value = muestra.error_muestral;
      currentRow1++;

      ws1.getCell(`A${currentRow1}`).value = 'Método de Muestreo';
      ws1.getCell(`B${currentRow1}`).value = muestra.metodo_muestreo;
      ws1.mergeCells(`B${currentRow1}:E${currentRow1}`);
      ws1.getCell(`B${currentRow1}`).alignment = { wrapText: true, vertical: 'top', horizontal: 'left' };
      ws1.getRow(currentRow1).height = 300;
      currentRow1++;

      currentRow1++;
    }

    // Quitamos los elementos de HTML
      function stripHtmlTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '').replace(/&iquest;/g, '¿').replace(/&nbsp;/g, ' ');
      }

    // Preguntas
      const cuestionarioCell3 = ws1.getCell('A45');
      cuestionarioCell3.value = 'PREGUNTAS';
      cuestionarioCell3.font = { bold: true };
      cuestionarioCell3.alignment = { vertical: 'middle', horizontal: 'center' };
      ws1.mergeCells('A45:B45');
      
      for(let i = 1; i <= 26; i++){ 
        ws1.getCell(45, i).fill = {
            type: 'pattern',
            pattern:'solid',
            fgColor:{ argb:'FFD3D3D3' }
        };
      }

      ws1.getCell('A46').value = 'Pregunta';
      ws1.getCell('B46').value = this.preguntaData.ficha.titulo;

      ws1.getCell('A47').value = 'Texto';
      ws1.getCell('B47').value = stripHtmlTags(this.preguntaData.ficha.texto); 
      ws1.mergeCells('B47:E47');
      ws1.getCell('B47').alignment = { wrapText: true, vertical: 'top', horizontal: 'left' };
      ws1.getRow(47).height = 300;



    //Índice de preguntas
    const cuestionarioCell4 = ws1.getCell('A48');
    cuestionarioCell4.value = 'ÍNDICE DE PREGUNTAS';
    cuestionarioCell4.font = { bold: true };
    cuestionarioCell4.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A48:J48');

    for(let i = 1; i <= 26; i++){ 
      ws1.getCell(48, i).fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{ argb:'FFD3D3D3' }
      };
    }

    let currentRow2 = 49;

    ws1.getCell(`A${currentRow2}`).value = 'Código';
    ws1.getCell(`A${currentRow2}`).font = { bold: true };

    ws1.getCell(`B${currentRow2}`).value = 'Título';
    ws1.getCell(`B${currentRow2}`).font = { bold: true };

    ws1.mergeCells(`B${currentRow2}:I${currentRow2}`);

    ws1.getCell(`J${currentRow2}`).value = 'Series';
    ws1.getCell(`J${currentRow2}`).font = { bold: true };
    currentRow2++;

    for (let pregunta of this.preguntasCuestionarioData.lista) {
      ws1.getCell(`A${currentRow2}`).value = pregunta.codigo;

      ws1.getCell(`B${currentRow2}`).value = pregunta.titulo;
      ws1.mergeCells(`B${currentRow2}:I${currentRow2}`);

      for (let serie of pregunta.series) {
        ws1.getCell(`J${currentRow2}`).value = serie.titulo;
        currentRow2++;
      }

      ws1.unMergeCells(`B${currentRow2}:I${currentRow2}`);
    }

    //Logo
    this.addLogoToWorkbook(workbook).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Estudios.xlsx';
        link.click();
        URL.revokeObjectURL(url);
      });
    });
  }

  getLogoAsBase64() {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      //  img.src = 'https://i.imgur.com/77syx2k.png';
      img.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Logotipo_del_CIS.png';
      //img.src = 'https://webserver-cis-dev.lfr.cloud/documents/d/cis/logo-cis';
      img.onload = () => {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        ctx.drawImage(img, 0, 0);
        let base64Image = canvas.toDataURL('image/png');
        resolve(base64Image);
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  }

  async addLogoToWorkbook(workbook) {
    const base64Logo = await this.getLogoAsBase64();
    const base64Data = base64Logo.split(',')[1];
    const blob = this.b64toBlob(base64Data, 'image/png');
    const buffer = await this.blobToArrayBuffer(blob);

    const logoId = workbook.addImage({
      buffer: buffer,
      extension: 'png',
    });

    const ws = workbook.getWorksheet('Estudios');
    ws.addImage(logoId, {
      tl: { col: 0, row: 0 },
      br: { col: 1, row: 4 },
      editAs: 'absolute',
    });
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }








 }

export { ExportDocument };