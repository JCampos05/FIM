import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function PracticasView() {
    const html = await fetch('./app/views/servicios/practicas/practicas.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-practicas').innerHTML = renderCardGrid([
        {
            icon: 'ph-clock',
            title: 'Duracion',
            text: 'Minimo 300 horas en un periodo acordado entre la empresa, el estudiante y la facultad.',
            accent: 'blue'
        },
        {
            icon: 'ph-calendar-check',
            title: 'Cuando realizarlas',
            text: 'A partir del septimo semestre o con el 80% de creditos cubiertos segun el plan de estudios.',
            accent: 'copper'
        },
        {
            icon: 'ph-buildings',
            title: 'Empresas participantes',
            text: 'Empresas del sector productivo regional, nacional e internacional vinculadas con la facultad.',
            accent: 'slate'
        },
        {
            icon: 'ph-file-text',
            title: 'Documentacion',
            text: 'Convenio empresa-facultad, plan de actividades, reportes de avance y evaluacion final.',
            accent: 'gold'
        },
    ], 4);

    document.getElementById('accordion-practicas').innerHTML = renderAccordion([
        {
            question: '¿Puedo conseguir mi propio lugar de practicas?',
            answer: 'Si. Puedes proponer una empresa o institucion. Esta debe tener convenio vigente con la UAS o gestionar uno nuevo a traves del departamento de Vinculacion de la facultad.'
        },
        {
            question: '¿Las practicas profesionales son remuneradas?',
            answer: 'Depende de la empresa. Algunas otorgan una beca o sueldo al practicante. La facultad no garantiza remuneracion pero promueve convenios con empresas que apoyan economicamente a los estudiantes.'
        },
        {
            question: '¿Las practicas pueden realizarse fuera de Los Mochis?',
            answer: 'Si. Pueden realizarse en cualquier ciudad del pais o en el extranjero siempre que exista un convenio institucional vigente y se cuente con la aprobacion del coordinador academico.'
        },
        {
            question: '¿Las practicas profesionales sustituyen al servicio social?',
            answer: 'No. Son actividades distintas con objetivos diferentes. El servicio social tiene un enfoque comunitario y el de practicas es de experiencia laboral profesional. Ambos son requisitos independientes.'
        },
    ], 'accordion-practicas');

    initAccordion('accordion-practicas');
}