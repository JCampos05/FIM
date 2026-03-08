export default async function NoticiasView() {
    const html = await fetch('./app/views/noticias/noticias.html').then(r => r.text());
    return html;
}

export async function init() { }