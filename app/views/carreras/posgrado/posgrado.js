import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function PosgradoView() {
    const html = await fetch('./app/views/carreras/posgrado/posgrado.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-posgrado').innerHTML = renderCardGrid([
        {
            icon: 'ph-medal',
            title: 'Maestria en Ciencias de la Ingenieria',
            text: 'Programa de dos anos orientado a la investigacion aplicada y el desarrollo de soluciones tecnologicas para problemas regionales y nacionales.',
            href: 'http://uasposing.org/mci',
            linkLabel: 'Ver programa',
            accent: 'gold'
        },
        {
            icon: 'ph-graduation-cap',
            title: 'Doctorado en Ciencias de la Ingenieria',
            text: 'Programa doctoral de tres anos para la formacion de investigadores de alto nivel con produccion cientifica arbitrada e impacto en innovacion.',
            href: 'http://uasposing.org/dci',
            linkLabel: 'Ver programa',
            accent: 'gold'
        },
    ], 2);

    document.getElementById('card-grid-lineas').innerHTML = renderCardGrid([
        {
            icon: 'ph-cpu',
            title: 'Tecnologias de la Informacion',
            text: 'Inteligencia artificial, computo distribuido, ciberseguridad y sistemas inteligentes.',
            accent: 'blue'
        },
        {
            icon: 'ph-atom',
            title: 'Materiales y Nanotecnologia',
            text: 'Sintesis y caracterizacion de nanomateriales con aplicaciones en energia y biomedicina.',
            accent: 'sage'
        },
        {
            icon: 'ph-buildings',
            title: 'Infraestructura y Construccion',
            text: 'Analisis estructural, geotecnia, materiales de construccion y gestion de proyectos civiles.',
            accent: 'slate'
        },
        {
            icon: 'ph-sun',
            title: 'Energias Renovables',
            text: 'Sistemas fotovoltaicos, eolicos y de almacenamiento de energia para comunidades sustentables.',
            accent: 'gold'
        },
        {
            icon: 'ph-factory',
            title: 'Procesos Industriales',
            text: 'Optimizacion de sistemas productivos, automatizacion y manufactura avanzada.',
            accent: 'copper'
        },
        {
            icon: 'ph-globe-hemisphere-west',
            title: 'Geomatica y Territorio',
            text: 'Modelado espacial, teledeteccion y gestion de recursos naturales con SIG.',
            accent: 'olive'
        },
    ], 3);

    document.getElementById('accordion-posgrado').innerHTML = renderAccordion([
        {
            question: '¿Cuales son los requisitos de ingreso a la Maestria?',
            answer: 'Titulo de licenciatura en ingenieria o area afin, certificado de estudios, examen de admision, carta de exposicion de motivos, carta de recomendacion academica y entrevista con el comite de admisiones.'
        },
        {
            question: '¿El posgrado cuenta con becas?',
            answer: 'Si. Los estudiantes de tiempo completo pueden postular a becas SECIHTI, becas institucionales de la UAS y apoyos de proyectos de investigacion vigentes en la facultad.'
        },
        {
            question: '¿Cuanto tiempo dura la Maestria y el Doctorado?',
            answer: 'La Maestria tiene una duracion de cuatro semestres. El Doctorado tiene una duracion de seis semestres, ambos en modalidad escolarizada de tiempo completo.'
        },
        {
            question: '¿Se puede cursar el posgrado trabajando?',
            answer: 'Los programas estan disenados para cursarse en tiempo completo. Sin embargo, en casos especiales el comite academico puede evaluar situaciones particulares de los estudiantes.'
        },
        {
            question: '¿Donde puedo obtener mas informacion sobre admisiones?',
            answer: 'Puedes consultar el sitio oficial del posgrado en uasposing.org o comunicarte directamente con la coordinacion del posgrado a traves de la seccion de Contacto de esta facultad.'
        },
    ], 'accordion-posgrado');

    initAccordion('accordion-posgrado');
}