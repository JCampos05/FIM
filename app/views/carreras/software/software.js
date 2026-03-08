import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function SoftwareView() {
    const html = await fetch('./app/views/carreras/software/software.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-software').innerHTML = renderCardGrid([
        {
            icon: 'ph-code',
            title: 'Desarrollo de Software',
            text: 'Diseno y construccion de aplicaciones web, moviles y de escritorio con estandares de calidad.',
            accent: 'olive'
        },
        {
            icon: 'ph-git-branch',
            title: 'Metodologias Agiles',
            text: 'Aplicacion de Scrum, Kanban y DevOps para la gestion eficiente de proyectos de software.',
            accent: 'blue'
        },
        {
            icon: 'ph-database',
            title: 'Bases de Datos',
            text: 'Diseno, administracion y optimizacion de sistemas de bases de datos relacionales y NoSQL.',
            accent: 'slate'
        },
        {
            icon: 'ph-shield-check',
            title: 'Seguridad Informatica',
            text: 'Proteccion de sistemas y datos mediante criptografia, auditorias y buenas practicas de seguridad.',
            accent: 'copper'
        },
        {
            icon: 'ph-cloud',
            title: 'Computo en la Nube',
            text: 'Despliegue y gestion de aplicaciones en plataformas cloud como AWS, Azure y Google Cloud.',
            accent: 'sage'
        },
        {
            icon: 'ph-robot',
            title: 'Inteligencia Artificial',
            text: 'Fundamentos de machine learning, redes neuronales y procesamiento de datos a gran escala.',
            accent: 'olive'
        },
    ], 3);

    document.getElementById('accordion-software').innerHTML = renderAccordion([
        {
            question: '¿Cual es la diferencia entre la modalidad presencial y virtual?',
            answer: 'La modalidad presencial se imparte en el campus de Los Mochis con clases en aula. La modalidad virtual permite cursar la carrera a distancia mediante la plataforma Moodle de la UAS, con actividades sincronicas y asincronicas.'
        },
        {
            question: '¿Que lenguajes de programacion se aprenden?',
            answer: 'A lo largo de la carrera se trabaja con Python, Java, JavaScript, C++, SQL y tecnologias web como React y Node.js, entre otros, dependiendo del plan de estudios.'
        },
        {
            question: '¿Cual es el campo laboral del Ingeniero de Software?',
            answer: 'Empresas de desarrollo de software, startups tecnologicas, dependencias gubernamentales, sector financiero, salud, educacion y cualquier industria que requiera sistemas de informacion.'
        },
        {
            question: '¿Se puede titular con un proyecto de desarrollo?',
            answer: 'Si. Entre las opciones de titulacion se incluye el desarrollo de un proyecto de software, tesis, examen EGEL y otros mecanismos establecidos por la facultad.'
        },
    ], 'accordion-software');

    initAccordion('accordion-software');
}