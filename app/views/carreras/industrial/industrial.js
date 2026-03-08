import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function IndustrialView() {
    const html = await fetch('./app/views/carreras/industrial/industrial.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-industrial').innerHTML = renderCardGrid([
        {
            icon: 'ph-factory',
            title: 'Gestion de Procesos',
            text: 'Analisis, diseno y optimizacion de procesos productivos en plantas industriales.',
            accent: 'copper'
        },
        {
            icon: 'ph-chart-line-up',
            title: 'Control de Calidad',
            text: 'Implementacion de sistemas de gestion de calidad bajo normas ISO y metodologias Six Sigma.',
            accent: 'olive'
        },
        {
            icon: 'ph-robot',
            title: 'Automatizacion Industrial',
            text: 'Diseno e integracion de sistemas automatizados, PLC y robotica en lineas de produccion.',
            accent: 'blue'
        },
        {
            icon: 'ph-recycle',
            title: 'Sustentabilidad Industrial',
            text: 'Gestion ambiental, produccion limpia y eficiencia energetica en procesos industriales.',
            accent: 'sage'
        },
        {
            icon: 'ph-wrench',
            title: 'Mantenimiento Industrial',
            text: 'Planificacion y ejecucion de mantenimiento preventivo y correctivo de equipos y maquinaria.',
            accent: 'slate'
        },
        {
            icon: 'ph-package',
            title: 'Logistica y Cadena de Suministro',
            text: 'Optimizacion de inventarios, distribucion y gestion de la cadena productiva.',
            accent: 'gold'
        },
    ], 3);

    document.getElementById('accordion-industrial').innerHTML = renderAccordion([
        {
            question: '¿Cual es el campo laboral del Ing. en Procesos Industriales?',
            answer: 'Puede trabajar en empresas manufactureras, plantas agroindustriales, industria automotriz, empresas de consultoria en calidad y procesos, y en cualquier sector que requiera optimizacion de operaciones productivas.'
        },
        {
            question: '¿Que certificaciones complementan esta carrera?',
            answer: 'Certificaciones en Lean Manufacturing, Six Sigma, ISO 9001, ISO 14001 y OHSAS 18001 son altamente valoradas y complementan la formacion del ingeniero en procesos industriales.'
        },
        {
            question: '¿Cuantos semestres dura la carrera?',
            answer: 'La carrera tiene una duracion de 9 semestres en modalidad presencial bajo el Plan 2022.'
        },
        {
            question: '¿Hay oportunidades de practicas profesionales en la region?',
            answer: 'Si. El noroeste de Mexico cuenta con importante actividad agroindustrial, pesquera y manufacturera que ofrece amplias oportunidades de vinculacion para los estudiantes de la carrera.'
        },
    ], 'accordion-industrial');

    initAccordion('accordion-industrial');
}