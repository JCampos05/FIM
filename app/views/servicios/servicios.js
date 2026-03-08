import { renderCardGrid } from '../../components/card-grid/card-grid.js';

export default async function ServiciosView() {
    const html = await fetch('./app/views/servicios/servicios.html').then(r => r.text());
    return html;
}

export async function init() {
    document.getElementById('card-grid-servicios').innerHTML = renderCardGrid([
        {
            icon: 'ph-handshake',
            title: 'Servicio Social',
            text: 'Requisito curricular que vincula al estudiante con la comunidad mediante actividades de impacto social.',
            href: '#/servicios/servicio-social',
            linkLabel: 'Ver informacion',
            accent: 'sage'
        },
        {
            icon: 'ph-briefcase',
            title: 'Practicas Profesionales',
            text: 'Experiencia laboral supervisada en empresas e instituciones del sector productivo regional.',
            href: '#/servicios/practicas',
            linkLabel: 'Ver informacion',
            accent: 'blue'
        },
        {
            icon: 'ph-users-three',
            title: 'Tutorias',
            text: 'Acompanamiento academico personalizado por parte de profesores tutores a lo largo de la carrera.',
            href: '#/servicios/tutorias',
            linkLabel: 'Ver informacion',
            accent: 'slate'
        },
        {
            icon: 'ph-certificate',
            title: 'Titulacion',
            text: 'Modalidades y requisitos para obtener el titulo de licenciatura o grado de posgrado.',
            href: '#/servicios/titulacion',
            linkLabel: 'Ver informacion',
            accent: 'gold'
        },
    ], 4);

    document.getElementById('card-grid-accesos').innerHTML = renderCardGrid([
        {
            icon: 'ph-student',
            title: 'Portal Alumnos',
            text: 'Consulta calificaciones, horarios, historial academico y tramites en linea.',
            href: 'http://dse.uasnet.mx/alumnos',
            linkLabel: 'Ingresar',
            accent: 'blue'
        },
        {
            icon: 'ph-chalkboard-teacher',
            title: 'Portal Docentes',
            text: 'Acceso al sistema institucional para profesores y personal academico.',
            href: 'http://siia.uasnet.mx/empleado',
            linkLabel: 'Ingresar',
            accent: 'slate'
        },
        {
            icon: 'ph-monitor',
            title: 'Plataforma Virtual',
            text: 'Acceso a cursos en linea, materiales y actividades de la modalidad virtual.',
            href: 'http://diplouasvirtual.net/ing_mochis',
            linkLabel: 'Ingresar',
            accent: 'olive'
        },
        {
            icon: 'ph-file-text',
            title: 'Registro EGEL',
            text: 'Registro en linea para el Examen General de Egreso de Licenciatura CENEVAL.',
            href: 'http://registroenlinea.ceneval.edu.mx',
            linkLabel: 'Registrarse',
            accent: 'copper'
        },
    ], 4);
}