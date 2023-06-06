import { HomeChart } from './home-chart';
import estudioData from './estudio.json'; 
import preguntaData from './pregunta.json';
import preguntasCuestionarioData from './preguntasCuestionario.json';
import { ExportDocument } from './export';

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */

export default function main({portletNamespace, contextPath, portletElementId,configuration}) {
      
    
    const node = document.getElementById(portletElementId);
    node.innerHTML =`
    <div id="graph_container">
        <div id="graph_table" class="table"></div>

        <div id="buttons_container">
            <button type="button" id="exportBtn"> Exportar a Excel </button>
            <button type="button" id="exportBtnPDF"> Exportar a PDF </button>
        </div>
        <canvas id="graph_chart"></canvas>
    </div>

    `;

    //const url_basse = 'https://webserver-cis-dev.lfr.cloud/o/cis';
    const url_basse = 'http://77.227.0.28:8180/cis/apijds';

    let exportDocument = new ExportDocument(estudioData, preguntaData, preguntasCuestionarioData); 

    document.getElementById('exportBtn').addEventListener('click', () => {
      exportDocument.exportToExcel();
    });
    
    document.getElementById('exportBtnPDF').addEventListener('click', () => {
      exportDocument.exportToPDF();
    });
}
