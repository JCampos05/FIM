export default async function DirectorioView() {
    const html = await fetch('./app/views/directorio/directorio.html').then(r => r.text());
    return html;
}

export async function init() { }