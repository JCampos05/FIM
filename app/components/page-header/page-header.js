export function renderPageHeader({ title, subtitle, breadcrumb = [] }) {
    return `
    <section class="page-header">
      <div class="page-header__bg" aria-hidden="true"></div>
      <div class="container page-header__inner">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#/" class="breadcrumb__item" data-link>Inicio</a>
          ${breadcrumb.map((crumb, i) =>
        i === breadcrumb.length - 1
            ? `<span class="breadcrumb__sep" aria-hidden="true"><i class="ph ph-caret-right"></i></span>
                 <span class="breadcrumb__item breadcrumb__item--active">${crumb.label}</span>`
            : `<span class="breadcrumb__sep" aria-hidden="true"><i class="ph ph-caret-right"></i></span>
                 <a href="${crumb.href}" class="breadcrumb__item" data-link>${crumb.label}</a>`
    ).join('')}
        </nav>
        <h1 class="display-1 page-header__title">${title}</h1>
        ${subtitle ? `<p class="page-header__subtitle">${subtitle}</p>` : ''}
      </div>
    </section>
  `;
}