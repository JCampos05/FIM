import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function CivilView() {
    const html = await fetch('./app/views/carreras/civil/civil.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-civil').innerHTML = renderCardGrid([
        {
            icon: 'ph-buildings',
            title: 'Infraestructura Urbana',
            text: 'Diseno y construccion de edificaciones, puentes, carreteras y obras de urbanizacion.',
            accent: 'blue'
        },
        {
            icon: 'ph-drop',
            title: 'Ingenieria Hidraulica',
            text: 'Gestion de recursos hidricos, presas, sistemas de riego y drenaje urbano.',
            accent: 'slate'
        },
        {
            icon: 'ph-graph',
            title: 'Analisis Estructural',
            text: 'Calculo y diseno de estructuras resistentes ante cargas estaticas y sismicas.',
            accent: 'sage'
        },
        {
            icon: 'ph-map-trifold',
            title: 'Geotecnia y Topografia',
            text: 'Estudio del suelo, cimentaciones y levantamientos topograficos de precision.',
            accent: 'olive'
        },
        {
            icon: 'ph-leaf',
            title: 'Impacto Ambiental',
            text: 'Evaluacion y mitigacion de impactos ambientales en proyectos de construccion.',
            accent: 'sage'
        },
        {
            icon: 'ph-clipboard-text',
            title: 'Administracion de Obras',
            text: 'Planeacion, presupuesto y supervision de proyectos de construccion.',
            accent: 'copper'
        },
    ], 3);

    document.getElementById('accordion-civil').innerHTML = renderAccordion([
        {
            question: '¿Cual es el campo laboral del Ingeniero Civil?',
            answer: 'El ingeniero civil puede desempenarse en empresas constructoras, dependencias gubernamentales, consultoras de infraestructura, organismos de agua y en el sector privado como contratista independiente.'
        },
        {
            question: '¿Cuantos semestres dura la carrera?',
            answer: 'La carrera tiene una duracion de 9 semestres en modalidad presencial, tanto en el Plan V como en el Plan 2022.'
        },
        {
            question: '¿La carrera esta acreditada?',
            answer: 'Si. El programa de Ingenieria Civil cuenta con acreditacion del Consejo de Acreditacion de la Ensenanza de la Ingenieria (CACEI), lo que garantiza la calidad del programa a nivel nacional.'
        },
        {
            question: '¿Se puede estudiar en modalidad virtual?',
            answer: 'Actualmente la Ingenieria Civil se ofrece unicamente en modalidad presencial en el campus de Los Mochis.'
        },
    ], 'accordion-civil');

    initAccordion('accordion-civil');
}