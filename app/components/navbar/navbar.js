export async function loadNavbar() {
    const [html, _css] = await Promise.all([
        fetch('./app/components/navbar/navbar.html').then(r => r.text()),
        injectComponentCSS('./app/components/navbar/navbar.css'),
    ]);

    const outlet = document.getElementById('navbar-outlet');
    outlet.innerHTML = html;

    initNavbar();
}

function injectComponentCSS(path) {
    if (document.querySelector(`link[data-component-css="${path}"]`)) return Promise.resolve();
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        link.dataset.componentCss = path;
        link.onload = resolve;
        document.head.appendChild(link);
    });
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) navMenu.classList.remove('open');
    });
}