export async function loadFooter() {
    const [html, _css] = await Promise.all([
        fetch('./app/components/footer/footer.html').then(r => r.text()),
        injectComponentCSS('./app/components/footer/footer.css'),
    ]);

    const outlet = document.getElementById('footer-outlet');
    outlet.innerHTML = html;
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