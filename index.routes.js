import { loadNavbar } from './app/components/navbar/navbar.js';
import { loadFooter } from './app/components/footer/footer.js';

const routes = {
    '/': './app/views/home/home.view.js',
    '/oferta-educativa': './app/views/oferta-educativa/oferta-educativa.view.js',
    '/oferta-educativa/civil': './app/views/carreras/civil/civil.view.js',
    '/oferta-educativa/geodesica': './app/views/carreras/geodesica/geodesica.view.js',
    '/oferta-educativa/software': './app/views/carreras/software/software.view.js',
    '/oferta-educativa/industrial': './app/views/carreras/industrial/industrial.view.js',
    '/oferta-educativa/nanotecnologia': './app/views/carreras/nanotecnologia/nanotecnologia.view.js',
    '/oferta-educativa/posgrado': './app/views/carreras/posgrado/posgrado.view.js',
    '/servicios': './app/views/servicios/servicios.view.js',
    '/servicios/servicio-social': './app/views/servicios/servicio-social/servicio-social.view.js',
    '/servicios/practicas': './app/views/servicios/practicas/practicas.view.js',
    '/servicios/tutorias': './app/views/servicios/tutorias/tutorias.view.js',
    '/servicios/titulacion': './app/views/servicios/titulacion/titulacion.view.js',
    '/directorio': './app/views/directorio/directorio.view.js',
    '/noticias': './app/views/noticias/noticias.view.js',
    '/contacto': './app/views/contacto/contacto.view.js',
};

const app = document.getElementById('app');

async function injectCSS(path) {
    const cssPath = path.replace('.view.js', '.view.css');
    const id = cssPath;
    if (document.querySelector(`link[data-view-css="${id}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.dataset.viewCss = id;
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
    const modulePath = routes[path] ?? null;

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
        await injectCSS(modulePath);
        const module = await import(modulePath);
        const html = await module.default();
        app.innerHTML = html;
        app.classList.remove('view-enter');
        void app.offsetWidth;
        app.classList.add('view-enter');
        window.scrollTo({ top: 0, behavior: 'instant' });
        setActiveLink(path);
        bindLinks();
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

async function init() {
    await loadNavbar();
    await loadFooter();
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