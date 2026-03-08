import { renderPageHeader } from '../../components/page-header/page-header.js';
import { renderCardGrid } from '../../components/card-grid/card-grid.js';

export default async function OfertaEducativaView() {
    const html = await fetch('./app/views/oferta-educativa/oferta-educativa.html').then(r => r.text());
    return html;
}

export async function initOfertaEducativa() {
    // Page header
    document.getElementById('page-header-outlet').innerHTML = renderPageHeader({
        title: 'Oferta Educativa',
        subtitle: 'Programas de licenciatura y posgrado con reconocimiento nacional.',
        breadcrumb: [
            { label: 'Oferta Educativa', href: '#/oferta-educativa' }
        ]
    });

    // Licenciaturas
    document.getElementById('card-grid-licenciaturas').innerHTML = renderCardGrid([
        {
            icon: 'ph-buildings',
            title: 'Ingenieria Civil',
            text: 'Formacion en diseno, construccion y gestion de infraestructura urbana y rural.',
            href: '#/oferta-educativa/civil',
            linkLabel: 'Ver programa',
            accent: 'blue'
        },
        {
            icon: 'ph-globe-hemisphere-west',
            title: 'Ingenieria Geodesica',
            text: 'Estudio de la forma y dimension de la Tierra aplicado al territorio y sistemas de informacion geografica.',
            href: '#/oferta-educativa/geodesica',
            linkLabel: 'Ver programa',
            accent: 'slate'
        },
        {
            icon: 'ph-code',
            title: 'Ingenieria de Software',
            text: 'Desarrollo de sistemas de software de calidad en modalidad presencial y virtual.',
            href: '#/oferta-educativa/software',
            linkLabel: 'Ver programa',
            accent: 'olive'
        },
        {
            icon: 'ph-factory',
            title: 'Ing. en Procesos Industriales',
            text: 'Optimizacion y gestion de procesos productivos en la industria moderna.',
            href: '#/oferta-educativa/industrial',
            linkLabel: 'Ver programa',
            accent: 'copper'
        },
        {
            icon: 'ph-atom',
            title: 'Ing. en Nanotecnologia y Energias Renovables',
            text: 'Innovacion en materiales a escala nanometrica y aprovechamiento de energias limpias.',
            href: '#/oferta-educativa/nanotecnologia',
            linkLabel: 'Ver programa',
            accent: 'sage'
        },
    ], 3);

    // Posgrado
    document.getElementById('card-grid-posgrado').innerHTML = renderCardGrid([
        {
            icon: 'ph-medal',
            title: 'Maestria en Ciencias de la Ingenieria',
            text: 'Programa de posgrado orientado a la investigacion aplicada y el desarrollo tecnologico regional.',
            href: '#/oferta-educativa/posgrado',
            linkLabel: 'Ver programa',
            accent: 'gold'
        },
        {
            icon: 'ph-graduation-cap',
            title: 'Doctorado en Ciencias de la Ingenieria',
            text: 'Formacion de investigadores de alto nivel con impacto en ciencia e innovacion.',
            href: '#/oferta-educativa/posgrado',
            linkLabel: 'Ver programa',
            accent: 'gold'
        },
    ], 2);
}

export { initOfertaEducativa as init };