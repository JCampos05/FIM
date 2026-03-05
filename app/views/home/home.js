export default async function HomeView() {
    const html = await fetch('./app/views/home/home.html').then(r => r.text());
    return html;
}