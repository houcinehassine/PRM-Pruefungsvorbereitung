const chapter = {
  title: 'Kapitel 3 · SVM',
  pages: [
    {
      id: 'page1',
      href: 'Page1.html',
      title: '1. Einführung & Grundkonzept',
      sections: [
        { href: '#einführung', title: 'Einführung' },
        { href: '#definition', title: 'Definition' },
        { href: '#vorteile', title: 'Vorteile' },
        { href: '#nachteile', title: 'Nachteile' },
        { href: '#svc-svr', title: 'SVC & SVR' }
      ]
    },
    {
      id: 'page2',
      href: 'Page2.html',
      title: '2. Klassifikator & Max Margin',
      sections: [
        { href: '#daten-ploten', title: 'Daten ploten' },
        { href: '#viele-geraden', title: 'Viele Geraden' },
        { href: '#margin-maximieren', title: 'Margin maximieren' },
        { href: '#fitting-training', title: 'Fitting / Training' },
        { href: '#support-vectors', title: 'Support Vectors' },
        { href: '#mathematik', title: 'Mathematik' }
      ]
    },
    {
      id: 'page3',
      href: 'Page3.html',
      title: '3. Begriffe & Parameter',
      sections: [
        { href: '#hard-soft-margin', title: 'Hard / Soft Margin' },
        { href: '#argument-c', title: 'Argument C' },
        { href: '#loss-function', title: 'Loss Function' },
        { href: '#gradienten', title: 'Gradienten' },
        { href: '#gradientenabstieg', title: 'Gradientenabstieg' },
        { href: '#visualisierung', title: 'Visualisierung' }
      ]
    },
    {
      id: 'page4',
      href: 'Page4.html',
      title: '4. Nichtlineare Probleme',
      sections: [
        { href: '#problem', title: 'Problem vorstellen' },
        { href: '#beispiel', title: 'Beispiel mit Kreisen' },
        { href: '#projektion', title: 'Projektion in höheren Raum' },
        { href: '#kernel-trick', title: 'Kernel-Trick' },
        { href: '#multiclass', title: 'Mehrklassen-SVMs' }
      ]
    },
    {
      id: 'page5',
      href: 'Page5.html',
      title: '5. Regression & SVR',
      sections: [
        { href: '#definition', title: 'Definition' },
        { href: '#problem-linear', title: 'Problem 1: Linear' },
        { href: '#linear-loesung', title: 'Lösungsweg linear' },
        { href: '#analyse-linear', title: 'Analyse linear' },
        { href: '#problem-nichtlinear', title: 'Problem 2: Nichtlinear' },
        { href: '#poly-kernel', title: 'Poly-Kernel' },
        { href: '#rbf-kernel', title: 'RBF-Kernel' }
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