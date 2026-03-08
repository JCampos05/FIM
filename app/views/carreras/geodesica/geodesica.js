import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function GeodesicaView() {
    const html = await fetch('./app/views/carreras/geodesica/geodesica.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-geodesica').innerHTML = renderCardGrid([
        {
            icon: 'ph-globe-hemisphere-west',
            title: 'Sistemas de Informacion Geografica',
            text: 'Creacion, analisis y gestion de datos espaciales mediante plataformas SIG.',
            accent: 'slate'
        },
        {
            icon: 'ph-compass',
            title: 'Topografia y Cartografia',
            text: 'Levantamientos topograficos de precision y elaboracion de mapas a distintas escalas.',
            accent: 'blue'
        },
        {
            icon: 'ph-broadcast',
            title: 'GPS y Posicionamiento',
            text: 'Aplicacion de sistemas satelitales para posicionamiento geodesico de alta precision.',
            accent: 'olive'
        },
        {
            icon: 'ph-drone',
            title: 'Fotogrametria y Teledeteccion',
            text: 'Obtencion y procesamiento de imagenes aereas y satelitales para analisis territorial.',
            accent: 'sage'
        },
        {
            icon: 'ph-mountains',
            title: 'Catastro y Ordenamiento',
            text: 'Registro, valuacion y administracion de bienes inmuebles y ordenamiento territorial.',
            accent: 'copper'
        },
        {
            icon: 'ph-chart-line',
            title: 'Geomatica',
            text: 'Integracion de disciplinas para la captura, almacenamiento y analisis de informacion espacial.',
            accent: 'slate'
        },
    ], 3);

    document.getElementById('accordion-geodesica').innerHTML = renderAccordion([
        {
            question: '¿Cual es el campo laboral del Ingeniero Geodesico?',
            answer: 'Puede trabajar en dependencias gubernamentales como INEGI, CONAGUA y catastros municipales, empresas de consultoria en SIG, organismos de ordenamiento territorial y en el sector minero y petrolero.'
        },
        {
            question: '¿Que tecnologias se utilizan en la carrera?',
            answer: 'Se trabaja con software especializado como ArcGIS, QGIS, AutoCAD Civil 3D, drones fotogrametricos, equipos GPS diferenciales y estaciones totales de ultima generacion.'
        },
        {
            question: '¿Cuantos semestres dura la carrera?',
            answer: 'La carrera tiene una duracion de 9 semestres en modalidad presencial, tanto en el Plan III como en el Plan 2022.'
        },
        {
            question: '¿La Ingenieria Geodesica tiene salida laboral en la region?',
            answer: 'Si. El noroeste de Mexico cuenta con importante actividad agricola, minera y de desarrollo urbano que demanda constantemente profesionales en levantamiento y gestion territorial.'
        },
    ], 'accordion-geodesica');

    initAccordion('accordion-geodesica');
}