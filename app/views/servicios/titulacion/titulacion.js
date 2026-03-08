import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function TitulacionView() {
    const html = await fetch('./app/views/servicios/titulacion/titulacion.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-titulacion').innerHTML = renderCardGrid([
        {
            icon: 'ph-file-doc',
            title: 'Tesis',
            text: 'Investigacion original que aporta conocimiento nuevo al area de ingenieria elegida.',
            accent: 'blue'
        },
        {
            icon: 'ph-code',
            title: 'Proyecto de Desarrollo',
            text: 'Desarrollo de un sistema, prototipo o solucion tecnologica con aplicacion practica.',
            accent: 'olive'
        },
        {
            icon: 'ph-exam',
            title: 'Examen EGEL',
            text: 'Examen General de Egreso de Licenciatura aplicado por CENEVAL con nivel de competencia.',
            accent: 'gold'
        },
        {
            icon: 'ph-certificate',
            title: 'Estudios de Posgrado',
            text: 'Titulacion automatica al cubrir el primer semestre de maestria en institucion reconocida.',
            accent: 'sage'
        },
        {
            icon: 'ph-trophy',
            title: 'Promedio de Excelencia',
            text: 'Titulacion por promedio sobresaliente segun los criterios establecidos por el reglamento UAS.',
            accent: 'copper'
        },
        {
            icon: 'ph-books',
            title: 'Memorias de Experiencia',
            text: 'Documento que sistematiza la experiencia profesional adquirida durante la trayectoria laboral.',
            accent: 'slate'
        },
    ], 3);

    document.getElementById('card-grid-requisitos').innerHTML = renderCardGrid([
        {
            icon: 'ph-check-circle',
            title: 'Creditos Completos',
            text: 'Haber cubierto el 100% de los creditos del plan de estudios correspondiente.',
            accent: 'blue'
        },
        {
            icon: 'ph-handshake',
            title: 'Servicio Social Liberado',
            text: 'Contar con la carta de liberacion del servicio social emitida por la institucion receptora.',
            accent: 'sage'
        },
        {
            icon: 'ph-briefcase',
            title: 'Practicas Acreditadas',
            text: 'Tener acreditadas las practicas profesionales con evaluacion aprobatoria del tutor empresarial.',
            accent: 'slate'
        },
        {
            icon: 'ph-translate',
            title: 'Segundo Idioma',
            text: 'Acreditar el nivel de ingles requerido por el plan de estudios mediante examen institucional.',
            accent: 'gold'
        },
    ], 4);

    document.getElementById('accordion-titulacion').innerHTML = renderAccordion([
        {
            question: '¿Cuanto tiempo tengo para titularme despues de egresar?',
            answer: 'El reglamento de la UAS establece un plazo de cinco anos a partir del egreso para realizar los tramites de titulacion. Pasado este tiempo se requiere un proceso de revalidacion.'
        },
        {
            question: '¿Que modalidad de titulacion es la mas rapida?',
            answer: 'El examen EGEL y la titulacion por promedio de excelencia suelen ser las opciones mas rapidas ya que no requieren elaborar un documento extenso. Sin embargo dependen del historial academico del estudiante.'
        },
        {
            question: '¿Donde realizo el tramite de titulacion?',
            answer: 'El tramite inicia en el departamento de Servicios Escolares de la facultad. Debes presentar los documentos requeridos y solicitar tu asignacion ante la Comision Academica de Titulacion.'
        },
        {
            question: '¿Puedo cambiar de modalidad de titulacion?',
            answer: 'Si, siempre que no hayas iniciado formalmente el proceso con una modalidad especifica. El cambio debe ser aprobado por la Comision Academica de Titulacion.'
        },
    ], 'accordion-titulacion');

    initAccordion('accordion-titulacion');
}