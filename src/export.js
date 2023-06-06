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

  exportToExcel() {
    const workbook = new ExcelJS.Workbook();
    const ws1 = workbook.addWorksheet('Estudios');
      // LOGO en las filas 1 a 4 y columna A
      this.addLogoToWorksheet(ws1);

    const columnA = ws1.getColumn('A');
    columnA.width = 40;
    columnA.font = { bold: true };

    //ESTUDIOS
    const cuestionarioCell = ws1.getCell('A5');
    cuestionarioCell.value = 'ESTUDIOS';
    cuestionarioCell.font = { bold: true };
    cuestionarioCell.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A5:B5');
  
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
    // ws1.getCell('B12').alignment = { wrapText: true };

    //CUESTIONARIOS
    const cuestionarioCell1 = ws1.getCell('A13');
    cuestionarioCell1.value = 'CUESTIONARIOS';
    cuestionarioCell1.font = { bold: true };
    cuestionarioCell1.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A13:B13');

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
        currentRow++;
    }
    //MUESTRAS
    const cuestionarioCell2 = ws1.getCell('A21');
    cuestionarioCell2.value = 'MUESTRAS';
    cuestionarioCell2.font = { bold: true };
    cuestionarioCell2.alignment = { vertical: 'middle', horizontal: 'center' };
    ws1.mergeCells('A21:B21');


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
        currentRow1++;
    }

        //PREGUNTAS
        const cuestionarioCell3 = ws1.getCell('A44');
        cuestionarioCell3.value = 'PREGUNTAS';
        cuestionarioCell3.font = { bold: true };
        cuestionarioCell3.alignment = { vertical: 'middle', horizontal: 'center' };
        ws1.mergeCells('A44:B44');

        ws1.getCell('A45').value = 'Pregunta';
        ws1.getCell('B45').value = this.preguntaData.ficha.titulo;
        
        ws1.getCell('A46').value = 'Texto';
        ws1.getCell('B46').value = this.preguntaData.ficha.texto;

        // ÍNDICE DE PREGUNTAS
        const cuestionarioCell4 = ws1.getCell('A47');
        cuestionarioCell4.value = 'ÍNDICE DE PREGUNTAS';
        cuestionarioCell4.font = { bold: true };
        cuestionarioCell4.alignment = { vertical: 'middle', horizontal: 'center' };
        ws1.mergeCells('A47:C47');

        let currentRow2 = 48;

        ws1.getCell(`A${currentRow2}`).value = 'Código';
        ws1.getCell(`A${currentRow2}`).font = { bold: true };

        ws1.getCell(`B${currentRow2}`).value = 'Título';
        ws1.getCell(`B${currentRow2}`).font = { bold: true };

        ws1.getCell(`C${currentRow2}`).value = 'Series';
        ws1.getCell(`C${currentRow2}`).font = { bold: true };
        currentRow2++;

        for (let pregunta of this.preguntasCuestionarioData.lista) {
          ws1.getCell(`A${currentRow2}`).value = pregunta.codigo;
          ws1.getCell(`B${currentRow2}`).value = pregunta.titulo;
    
        for (let serie of pregunta.series) {
          ws1.getCell(`C${currentRow2}`).value = serie.titulo;
          currentRow2++;
    }
}

        // CONSULTA DE VARIABLES
        const cuestionarioCell5 = ws1.getCell('A129');
        cuestionarioCell5.value = 'CONSULTA DE VARIABLES';
        cuestionarioCell5.font = { bold: true };
        cuestionarioCell5.alignment = { vertical: 'middle', horizontal: 'center' };
        ws1.mergeCells('A129:C129');




    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Estudios.xlsx';
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  async addLogoToWorksheet(worksheet) {
    const logoBase64 = await this.getLogoAsBase64();
    const logoImage = this.workbook.addImage({
      base64: logoBase64,
      extension: 'png',
    });
  
    // COORDENADAS LOGO
    const columnA = worksheet.getColumn('A');
    const imageStartRow = 1; 
    const imageEndRow = 4; 
  
    // LOGO
    worksheet.addImage(logoImage, {
      tl: { col: columnA.number, row: imageStartRow },
      br: { col: columnA.number, row: imageEndRow },
      ext: { width: columnA.width, height: columnA.height * (imageEndRow - imageStartRow + 1) },
    });
  }
  

  getLogoAsBase64() {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = 'https://i.imgur.com/77syx2k.png';

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        const base64Image = canvas.toDataURL('image/png');
        resolve(base64Image);
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  }

  

  exportToPDF() {
    
  }
}

export { ExportDocument };