import { renderCardGrid } from '../../../components/card-grid/card-grid.js';
import { renderAccordion, initAccordion } from '../../../components/accordion/accordion.js';

export default async function ServicioSocialView() {
    const html = await fetch('./app/views/servicios/servicio-social/servicio-social.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-ss').innerHTML = renderCardGrid([
        {
            icon: 'ph-clock',
            title: 'Duracion',
            text: '480 horas minimas distribuidas en un periodo no menor a seis meses ni mayor a dos anos.',
            accent: 'blue'
        },
        {
            icon: 'ph-calendar-check',
            title: 'Cuando realizarlo',
            text: 'A partir de haber cubierto el 70% de los creditos del plan de estudios vigente.',
            accent: 'sage'
        },
        {
            icon: 'ph-buildings',
            title: 'Donde realizarlo',
            text: 'Instituciones publicas, organizaciones sociales, dependencias gubernamentales o proyectos de la propia facultad.',
            accent: 'slate'
        },
        {
            icon: 'ph-file-text',
            title: 'Documentacion',
            text: 'Carta de presentacion, plan de trabajo, reportes bimestrales y carta de liberacion al concluir.',
            accent: 'gold'
        },
    ], 4);

    document.getElementById('accordion-ss').innerHTML = renderAccordion([
        {
            question: '¿Puedo realizar el servicio social en una empresa privada?',
            answer: 'El servicio social debe realizarse en instituciones publicas o de interes social. Las empresas privadas no son elegibles salvo que el proyecto tenga un impacto social claramente justificado y sea aprobado por el departamento.'
        },
        {
            question: '¿Como obtengo la carta de presentacion?',
            answer: 'Debes acudir al departamento de Servicios Escolares de la facultad con tu solicitud y los documentos requeridos. El tramite se realiza de forma presencial.'
        },
        {
            question: '¿El servicio social es remunerado?',
            answer: 'No necesariamente. La ley no obliga a las instituciones receptoras a remunerar al prestador, aunque algunas otorgan una beca o apoyo economico voluntariamente.'
        },
        {
            question: '¿Que pasa si no concluyo las horas en el tiempo establecido?',
            answer: 'Debes notificar al departamento escolar y solicitar una prorroga. El incumplimiento sin justificacion puede invalidar el periodo y obligarte a comenzar de nuevo.'
        },
    ], 'accordion-ss');

    initAccordion('accordion-ss');
}