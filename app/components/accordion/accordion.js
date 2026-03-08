/**
 * @param {Object[]} items
 * @param {string}   items[].question
 * @param {string}   items[].answer
 * @param {string}   [id]  - id unico para el contenedor
 */
export function renderAccordion(items, id = 'accordion') {
    return `
    <div class="accordion" id="${id}">
      ${items.map((item, i) => `
        <div class="accordion__item" id="${id}-item-${i}">
          <button
            class="accordion__trigger"
            aria-expanded="false"
            aria-controls="${id}-panel-${i}"
          >
            <span>${item.question}</span>
            <i class="ph ph-caret-down accordion__icon"></i>
          </button>
          <div
            class="accordion__panel"
            id="${id}-panel-${i}"
            role="region"
            hidden
          >
            <div class="accordion__body">${item.answer}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function initAccordion(id = 'accordion') {
    const container = document.getElementById(id);
    if (!container) return;

    container.querySelectorAll('.accordion__trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const expanded = trigger.getAttribute('aria-expanded') === 'true';
            const panel = document.getElementById(trigger.getAttribute('aria-controls'));

            // cierra todos
            container.querySelectorAll('.accordion__trigger').forEach(t => {
                t.setAttribute('aria-expanded', 'false');
                t.closest('.accordion__item').classList.remove('accordion__item--open');
            });
            container.querySelectorAll('.accordion__panel').forEach(p => {
                p.hidden = true;
            });

            // abre el seleccionado si estaba cerrado
            if (!expanded) {
                trigger.setAttribute('aria-expanded', 'true');
                trigger.closest('.accordion__item').classList.add('accordion__item--open');
                panel.hidden = false;
            }
        });
    });
}