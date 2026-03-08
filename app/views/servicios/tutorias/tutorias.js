import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function TutoriasView() {
    const html = await fetch('./app/views/servicios/tutorias/tutorias.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-tutorias').innerHTML = renderCardGrid([
        {
            icon: 'ph-user-circle',
            title: 'Tutor Asignado',
            text: 'Cada estudiante recibe un profesor tutor desde el primer semestre que lo acompana durante toda la carrera.',
            accent: 'blue'
        },
        {
            icon: 'ph-calendar',
            title: 'Sesiones Periodicas',
            text: 'Se realizan sesiones individuales y grupales programadas cada semestre para seguimiento academico.',
            accent: 'slate'
        },
        {
            icon: 'ph-users',
            title: 'Asesores Pares',
            text: 'Red de estudiantes de semestres avanzados que apoyan academicamente a companeros de primeros semestres.',
            accent: 'sage'
        },
        {
            icon: 'ph-chart-line-up',
            title: 'Seguimiento Integral',
            text: 'Atencion a aspectos academicos, personales y de orientacion vocacional y profesional.',
            accent: 'gold'
        },
    ], 4);

    document.getElementById('accordion-tutorias').innerHTML = renderAccordion([
        {
            question: '¿Como me comunico con mi tutor?',
            answer: 'Puedes ingresar al portal SIT en sit.uas.edu.mx/alumnos con tu matricula para consultar los datos de contacto de tu tutor asignado y gestionar tus sesiones.'
        },
        {
            question: '¿Puedo solicitar un cambio de tutor?',
            answer: 'Si. En casos justificados puedes solicitar el cambio ante la Coordinacion del Programa de Tutorias de la facultad. El proceso requiere una solicitud escrita con los motivos del cambio.'
        },
        {
            question: '¿Que es el programa de asesores pares?',
            answer: 'Es una red de estudiantes de semestres superiores capacitados para apoyar academicamente a sus companeros de primeros semestres en materias de mayor dificultad.'
        },
        {
            question: '¿Las tutorias son obligatorias?',
            answer: 'Si. La asistencia a las sesiones de tutoria es un requisito institucional. El incumplimiento puede afectar la inscripcion al siguiente semestre segun el reglamento de la UAS.'
        },
    ], 'accordion-tutorias');

    initAccordion('accordion-tutorias');
}