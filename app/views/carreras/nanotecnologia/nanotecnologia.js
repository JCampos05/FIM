import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function NanotecnologiaView() {
    const html = await fetch('./app/views/carreras/nanotecnologia/nanotecnologia.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-nano').innerHTML = renderCardGrid([
        {
            icon: 'ph-atom',
            title: 'Nanomateriales',
            text: 'Sintesis, caracterizacion y aplicacion de materiales a escala nanometrica con propiedades unicas.',
            accent: 'sage'
        },
        {
            icon: 'ph-sun',
            title: 'Energia Solar',
            text: 'Diseno y optimizacion de celdas fotovoltaicas y sistemas de captacion de energia solar.',
            accent: 'gold'
        },
        {
            icon: 'ph-wind',
            title: 'Energia Eolica',
            text: 'Analisis y aprovechamiento de recursos eolicos para la generacion de energia limpia.',
            accent: 'slate'
        },
        {
            icon: 'ph-flask',
            title: 'Quimica y Fisica Aplicada',
            text: 'Fundamentos de quimica cuantica y fisica del estado solido aplicados al desarrollo tecnologico.',
            accent: 'blue'
        },
        {
            icon: 'ph-heartbeat',
            title: 'Nanomedicina',
            text: 'Aplicaciones de la nanotecnologia en diagnostico, liberacion controlada de farmacos y biomateriales.',
            accent: 'copper'
        },
        {
            icon: 'ph-cpu',
            title: 'Nanoelectronica',
            text: 'Desarrollo de dispositivos electronicos de escala nanometrica para aplicaciones de alta tecnologia.',
            accent: 'olive'
        },
    ], 3);

    document.getElementById('accordion-nano').innerHTML = renderAccordion([
        {
            question: '¿Cual es el campo laboral del Ing. en Nanotecnologia?',
            answer: 'Centros de investigacion, empresas de tecnologia avanzada, industria farmaceutica, sector energetico, laboratorios de materiales y dependencias gubernamentales de ciencia y tecnologia como SECIHTI.'
        },
        {
            question: '¿Que infraestructura de laboratorio tiene la facultad?',
            answer: 'La facultad cuenta con laboratorios especializados en caracterizacion de materiales, microscopia, sintesis quimica y sistemas de energia renovable que soportan la formacion practica del estudiante.'
        },
        {
            question: '¿Hay oportunidades de investigacion durante la carrera?',
            answer: 'Si. Los estudiantes pueden integrarse a cuerpos academicos y proyectos de investigacion financiados por SECIHTI, lo que les permite publicar y desarrollar experiencia cientifica desde la licenciatura.'
        },
        {
            question: '¿Cuantos semestres dura la carrera?',
            answer: 'La carrera tiene una duracion de 9 semestres en modalidad presencial bajo el Plan 2022.'
        },
    ], 'accordion-nano');

    initAccordion('accordion-nano');
}