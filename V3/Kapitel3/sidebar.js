const chapter = {
  title: 'Kapitel 3 · Klassifikation',
  pages: [
    {
      id: 'page1',
      href: 'Page1.html',
      title: '1. Einführung',
      sections: [
        { href: '#einleitung', title: 'Einleitung' },
        { href: '#beispiel', title: 'Beispiel' },
        { href: '#svm', title: 'Warum SVM?' }
      ]
    },
    {
      id: 'page2',
      href: 'Page2.html',
      title: '2. Mathematische Herleitung',
      sections: [
        { href: '#einleitung', title: 'Einleitung' },
        { href: '#trainingsdatensatz', title: 'Trainingsdatensatz' },
        { href: '#hyperebene', title: 'Hyperebene' },
        { href: '#vorzeichen', title: 'Vorzeichen' }
      ]
    }
  ]
};

function renderSidebar(activePage = 'page1') {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  const toc = document.createElement('nav');
  toc.className = 'toc';

  const isActivePage = (page) => page.id === activePage;

  toc.innerHTML = `
    <p class="toc-title">Inhaltsverzeichnis</p>
    <div class="toc-group">
      <button class="toc-toggle" type="button" aria-expanded="${chapter.pages.some(isActivePage) ? 'true' : 'false'}">
        <span>${chapter.title}</span>
        <span class="toc-chevron">▾</span>
      </button>
      <div class="toc-body" ${chapter.pages.some(isActivePage) ? '' : 'hidden'}></div>
    </div>
  `;

  const body = toc.querySelector('.toc-body');

  chapter.pages.forEach(page => {
    const pageOpen = isActivePage(page);
    const pageBlock = document.createElement('div');
    pageBlock.className = 'toc-page-group';

    pageBlock.innerHTML = `
      <button class="toc-page-toggle ${pageOpen ? 'active' : ''}" type="button" aria-expanded="${pageOpen ? 'true' : 'false'}">
        <span>${page.title}</span>
        <span class="toc-chevron">▸</span>
      </button>
      <div class="toc-sublist" ${pageOpen ? '' : 'hidden'}>
        ${page.sections.map(section => `
          <a href="${page.href}${section.href}" class="toc-link">${section.title}</a>
        `).join('')}
      </div>
    `;

    const toggle = pageBlock.querySelector('.toc-page-toggle');
    const sublist = pageBlock.querySelector('.toc-sublist');

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      sublist.hidden = open;
    });

    body.appendChild(pageBlock);
  });

  const mainToggle = toc.querySelector('.toc-toggle');
  const mainBody = toc.querySelector('.toc-body');

  mainToggle.addEventListener('click', () => {
    const open = mainToggle.getAttribute('aria-expanded') === 'true';
    mainToggle.setAttribute('aria-expanded', String(!open));
    mainBody.hidden = open;
  });

  aside.appendChild(toc);
  return aside;
}

class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active') || 'page1';
    this.replaceWith(renderSidebar(activePage));
  }
}

customElements.define('site-sidebar', SiteSidebar);