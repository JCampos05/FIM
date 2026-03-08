/**
 * @param {Object[]} cards
 * @param {string}   cards[].icon       - clase ph, ej: "ph-buildings"
 * @param {string}   cards[].title
 * @param {string}   cards[].text
 * @param {string}   [cards[].href]
 * @param {string}   [cards[].linkLabel]
 * @param {string}   [cards[].accent]   - "blue" | "sage" | "gold" | "copper" | "slate" | "olive"
 * @param {number}   [cols]             - columnas en desktop: 2 | 3 | 4  (default 3)
 */
export function renderCardGrid(cards, cols = 3) {
    return `
    <div class="card-grid card-grid--${cols}">
      ${cards.map(card => `
        <div class="card card-grid__item">
          <div class="card__body">
            <div class="card__icon card__icon--${card.accent ?? 'blue'}">
              <i class="ph ${card.icon}" style="font-size:1.4rem"></i>
            </div>
            <h3 class="heading-3 card__title">${card.title}</h3>
            <p class="card__text">${card.text}</p>
            ${card.href ? `
              <a href="${card.href}" class="btn btn--ghost" style="margin-top:16px" ${card.href.startsWith('#') ? 'data-link' : 'target="_blank"'}>
                ${card.linkLabel ?? 'Ver mas'} <i class="ph ph-arrow-right"></i>
              </a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}