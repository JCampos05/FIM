import { loadNavbar } from './app/components/navbar/navbar.js';
import { loadFooter } from './app/components/footer/footer.js';

const routes = [
    { path: '/', module: () => import('./app/views/home/home.js') },
    { path: '/oferta-educativa', module: () => import('./app/views/oferta-educativa/oferta-educativa.js') },
    { path: '/oferta-educativa/civil', module: () => import('./app/views/carreras/civil/civil.js') },
    { path: '/oferta-educativa/geodesica', module: () => import('./app/views/carreras/geodesica/geodesica.js') },
    { path: '/oferta-educativa/software', module: () => import('./app/views/carreras/software/software.js') },
    { path: '/oferta-educativa/industrial', module: () => import('./app/views/carreras/industrial/industrial.js') },
    { path: '/oferta-educativa/nanotecnologia', module: () => import('./app/views/carreras/nanotecnologia/nanotecnologia.js') },
    { path: '/oferta-educativa/posgrado', module: () => import('./app/views/carreras/posgrado/posgrado.js') },
    { path: '/servicios', module: () => import('./app/views/servicios/servicios.js') },
    { path: '/servicios/servicio-social', module: () => import('./app/views/servicios/servicio-social/servicio-social.js') },
    { path: '/servicios/practicas', module: () => import('./app/views/servicios/practicas/practicas.js') },
    { path: '/servicios/tutorias', module: () => import('./app/views/servicios/tutorias/tutorias.js') },
    { path: '/servicios/titulacion', module: () => import('./app/views/servicios/titulacion/titulacion.js') },
    { path: '/directorio', module: () => import('./app/views/directorio/directorio.js') },
    { path: '/noticias', module: () => import('./app/views/noticias/noticias.js') },
    { path: '/contacto', module: () => import('./app/views/contacto/contacto.js') },
];

const app = document.getElementById('app');

async function injectCSS(routePath) {
    const cssPath = (() => {
        if (routePath === '/') return './app/views/home/home.css';

        const parts = routePath.replace(/^\//, '').split('/');

        if (parts.length === 1) {
            return `./app/views/${parts[0]}/${parts[0]}.css`;
        }

        if (parts[0] === 'oferta-educativa' && parts.length === 2) {
            return `./app/views/carreras/${parts[1]}/${parts[1]}.css`;
        }

        if (parts[0] === 'servicios' && parts.length === 2) {
            return `./app/views/servicios/${parts[1]}/${parts[1]}.css`;
        }

        return `./app/views/${parts[parts.length - 1]}/${parts[parts.length - 1]}.css`;
    })();

    if (document.querySelector(`link[data-view-css="${cssPath}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.dataset.viewCss = cssPath;
    document.head.appendChild(link);
}

function removeViewCSS() {
    document.querySelectorAll('link[data-view-css]').forEach(el => el.remove());
}

function setActiveLink(path) {
    document.querySelectorAll('[data-link]').forEach(link => {
        const href = link.getAttribute('href').replace('#', '') || '/';
        const isActive = href === path || (path !== '/' && href !== '/' && path.startsWith(href));
        link.classList.toggle('active', isActive);
    });
}

async function render(path) {
    const route = routes.find(r => r.path === path);
    const modulePath = route ? route.path : null;

    removeViewCSS();

    if (!modulePath) {
        app.innerHTML = notFound();
        app.classList.remove('view-enter');
        void app.offsetWidth;
        app.classList.add('view-enter');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
    }

    try {
        await injectCSS(route.path);
        const module = await route.module();
        const html = await module.default();
        app.innerHTML = html;
        app.classList.remove('view-enter');
        void app.offsetWidth;
        app.classList.add('view-enter');
        window.scrollTo({ top: 0, behavior: 'instant' });
        setActiveLink(path);
        bindLinks();
        if (module.init) await module.init();
    } catch (err) {
        app.innerHTML = notFound();
        console.error('[Router]', err);
    }
}

function bindLinks() {
    document.querySelectorAll('[data-link]').forEach(el => {
        el.addEventListener('click', (e) => {
            const href = el.getAttribute('href');
            if (href && href.startsWith('#/')) {
                e.preventDefault();
                const path = href.replace('#', '');
                history.pushState({}, '', href);
                render(path);
            }
        });
    });
}

window.addEventListener('popstate', () => {
    const path = window.location.hash.replace('#', '') || '/';
    render(path);
});

async function injectGlobalCSS(path) {
    if (document.querySelector(`link[data-component-css="${path}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    link.dataset.componentCss = path;
    document.head.appendChild(link);
}

async function init() {
    await loadNavbar();
    await loadFooter();
    injectGlobalCSS('./app/components/page-header/page-header.css');
    injectGlobalCSS('./app/components/card-grid/card-grid.css');
    injectGlobalCSS('./app/components/accordion/accordion.css');
    injectGlobalCSS('./app/views/carreras/carrera-base.css');
    injectGlobalCSS('./app/views/servicios/servicios.css');
    const path = window.location.hash.replace('#', '') || '/';
    render(path);
    bindLinks();
}

function notFound() {
    return `
    <section class="section">
      <div class="container text-center">
        <p class="overline">404</p>
        <h1 class="display-2" style="margin-top:12px;margin-bottom:16px">Pagina no encontrada</h1>
        <p class="body-lg" style="color:var(--text-secondary);margin-bottom:32px">
          La ruta solicitada no existe.
        </p>
        <a href="#/" class="btn btn--primary" data-link>Volver al inicio</a>
      </div>
    </section>
  `;
}

init();