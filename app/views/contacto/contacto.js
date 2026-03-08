export default async function ContactoView() {
    const html = await fetch('./app/views/contacto/contacto.html').then(r => r.text());
    return html;
}

export async function init() { }