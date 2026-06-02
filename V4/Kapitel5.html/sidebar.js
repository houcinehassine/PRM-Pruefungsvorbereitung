const chapter = {
  title: 'Kapitel 4 · Clustering',
  pages: [
    {
      id: 'page1',
      href: 'Page01.html',
      title: '1. Clustering Übersicht',
      sections: [
        { href: '#clustering-definition', title: 'Definition' },
        { href: '#clustering-arten', title: 'Arten des Clusterings' },
        { href: '#kmeans-zusammenfassung', title: 'K-means Zusammenfassung' },
        { href: '#kmeans-pros-cons', title: 'Vor- & Nachteile K-means' },
        { href: '#validierung-intro', title: 'Validierung' },
        { href: '#scaling-intro', title: 'Scaling' },
        { href: '#density-based-intro', title: 'Density-based Clustering' },
        { href: '#density-pros-cons', title: 'Vor- & Nachteile DBSCAN' }
      ]
    },
    {
      id: 'page2',
      href: 'Page02.html',
      title: '2. K-means',
      sections: [
        { href: '#funktionsweise', title: 'Funktionsweise' },
        { href: '#heuristik', title: 'Heuristik' },
        { href: '#kmeans-sklearn', title: 'K-means in Sklearn' },
        { href: '#problem-beispiel', title: 'Problem Beispiel' },
        { href: '#kmeans-loesung', title: 'K-means Lösung' }
      ]
    },
    {
      id: 'page3',
      href: 'Page03.html',
      title: '3. EM-Algorithmus in K-means',
      sections: [
        { href: '#em-was', title: 'Was ist EM-Algorithmus?' },
        { href: '#em-schritte', title: 'Analoge Schritte bei K-means' },
        { href: '#em-so-what', title: 'Expectation & Maximization' },
        { href: '#em-input-output', title: 'Input & Output' },
        { href: '#em-mathematik', title: 'Mathematische Ausführung' },
        { href: '#em-from-scratch', title: 'From Scratch Implementierung' },
        { href: '#em-nachteile', title: 'Nachteile des EM-Algorithmus' }
      ]
    },
    {
      id: 'page4',
      href: 'Page04.html',
      title: '4. Validierung von Clustering',
      sections: [
        { href: '#validierung-definition', title: 'Definition' },
        { href: '#validierung-arten', title: 'Arten der Validierung' },
        { href: '#dunn-index', title: 'Dunn-Index' },
        { href: '#davies-bouldin', title: 'Davies-Bouldin Index' },
        { href: '#silhouette-score', title: 'Silhouette Score' },
        { href: '#silhouette-plot', title: 'Silhouette-Plot lesen' },
        { href: '#sse-elbow', title: 'SSE & Elbow Plot' }
      ]
    },
    {
      id: 'page5',
      href: 'Page05.html',
      title: '5. K-means Variationen',
      sections: [
        { href: '#nichtlineare-probleme', title: 'Nichtlineare Probleme' },
        { href: '#spectral-clustering', title: 'Spectral Clustering' },
        { href: '#kmeans-plus', title: 'K-means++' },
        { href: '#k-median', title: 'K-Median' }
      ]
    },
    {
      id: 'page6',
      href: 'Page06.html',
      title: '6. Skalierung & DBSCAN',
      sections: [
        { href: '#skalierung', title: 'Skalierung' },
        { href: '#dbscan-definition', title: 'DBSCAN Definition' },
        { href: '#dbscan-algorithmus', title: 'DBSCAN Algorithmus' },
        { href: '#dbscan-sklearn', title: 'DBSCAN in Sklearn' },
        { href: '#dbscan-hyperparameter', title: 'Hyperparameter Tuning' }
      ]
    },
    {
      id: 'page7',
      href: 'Page07.html',
      title: '7. Vergleich Clustering-Verfahren',
      sections: [
        { href: '#datensaetze', title: 'Datensätze & Charakteristiken' },
        { href: '#algorithmen-vergleich', title: 'Algorithmen Vergleich' },
        { href: '#vergleich-code', title: 'Code Implementierung' }
      ]
    },
    {
      id: 'page8',
      href: 'Page08.html',
      title: '8. Anwendungsbeispiele',
      sections: [
        { href: '#beispiele-overview', title: 'Übersicht Fallstudien' },
        { href: '#konzepte', title: 'Konzept-Querverweise' },
        { href: '#vergleich', title: 'Gegenüberstellung' }
      ]
    },
    {
      id: 'page8_1',
      href: 'Page08_1.html',
      title: '8.1 Maschinenzustände',
      sections: [
        { href: '#weihenstephaner', title: 'Weihenstephaner Standard' },
        { href: '#data-generate', title: 'Daten generieren' },
        { href: '#data-load', title: 'Daten laden & visualisieren' },
        { href: '#scaling-decision', title: 'Scaling Entscheidung' },
        { href: '#sweep-k', title: 'Sweep k' },
        { href: '#elbow-plot', title: 'Elbow Plot' },
        { href: '#silhouette-analyse', title: 'Silhouette Analyse' }
      ]
    },
    {
      id: 'page8_2',
      href: 'Page08_2.html',
      title: '8.2 DBSCAN + kNN',
      sections: [
        { href: '#problem', title: 'Das Problem' },
        { href: '#knn-erklaert', title: 'kNN On-the-fly' },
        { href: '#pipeline', title: 'Vollständige Pipeline' },
        { href: '#uebung', title: 'Übungsaufgabe' }
      ]
    },
    {
      id: 'divider-pruefung',
      divider: true,
      label: 'Prüfungsvorbereitung'
    },
    {
      id: 'cheatsheet',
      href: 'PageCheatsheet.html',
      title: '📋 Cheatsheet',
      sections: [
        { href: '#formeln', title: 'Alle Formeln' },
        { href: '#sklearn-api', title: 'sklearn API' },
        { href: '#entscheidungen', title: 'Entscheidungsregeln' },
        { href: '#fallen', title: 'Typische Fallen' },
        { href: '#merksaetze', title: 'Merksätze' }
      ]
    },
    {
      id: 'quiz',
      href: 'PageQuiz.html',
      title: '🧠 Quiz',
      sections: [
        { href: '#konzept-fragen', title: 'Konzeptfragen (1–6)' },
        { href: '#formel-fragen', title: 'Formelfragen (7–9)' },
        { href: '#code-fragen', title: 'Code-Fragen (10–13)' },
        { href: '#fallen-fragen', title: '🪤 Fallen (14–18)' }
      ]
    }
  ]
};


// ─────────────────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('sidebar-enhanced-styles')) return;
  const style = document.createElement('style');
  style.id = 'sidebar-enhanced-styles';
  style.textContent = `

    /* ── Layout-Fix: Sidebar scrollt unabhängig vom Header ── */
    .layout {
      display: flex;
      align-items: flex-start;
    }

    .sidebar {
      width: 260px;
      min-width: 260px;
      /* Exakt unterhalb des Headers bleiben – Header-Höhe anpassen falls nötig */
      height: calc(100vh - var(--header-height, 56px));
      position: sticky;
      top: var(--header-height, 56px);
      overflow-y: auto;
      overflow-x: hidden;
      /* Padding oben – damit "INHALTSVERZEICHNIS" nie abgeschnitten wird */
      padding: var(--space-4) 0 var(--space-12) 0;
      border-right: 1px solid var(--color-border);
      background: var(--color-surface);
      scrollbar-width: thin;
      scrollbar-color: var(--color-border) transparent;
      /* Kein margin-top, kein transform */
      flex-shrink: 0;
    }
    .sidebar::-webkit-scrollbar { width: 4px; }
    .sidebar::-webkit-scrollbar-thumb {
      background: var(--color-border);
      border-radius: 99px;
    }

    /* ── Fortschrittsleiste ──────────────────────── */
    .toc-progress-wrap {
      padding: 0 var(--space-5) var(--space-3);
      border-bottom: 1px solid var(--color-border);
      margin-bottom: var(--space-3);
    }
    .toc-progress-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.62rem;
      color: var(--color-text-faint);
      margin-bottom: var(--space-1);
      font-weight: 600;
      letter-spacing: .04em;
    }
    .toc-progress-bar {
      height: 3px;
      background: var(--color-border);
      border-radius: 99px;
      overflow: hidden;
    }
    .toc-progress-fill {
      height: 100%;
      background: var(--color-primary);
      border-radius: 99px;
      transition: width .25s ease;
      width: 0%;
    }

    /* ── TOC Titel ───────────────────────────────── */
    .toc-title {
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--color-text-faint);
      padding: 0 var(--space-5);
      margin: 0 0 var(--space-2);
    }

    /* ── Kapitel-Toggle ──────────────────────────── */
    .toc-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--space-2) var(--space-4);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-text);
      text-align: left;
      gap: var(--space-2);
      transition: color .15s;
    }
    .toc-toggle:hover { color: var(--color-primary); }

    /* ── Chevron ─────────────────────────────────── */
    .toc-chevron {
      transition: transform .2s ease;
      font-size: .65rem;
      flex-shrink: 0;
      color: var(--color-text-faint);
      display: inline-block;
    }
    .toc-toggle[aria-expanded="true"] .toc-chevron,
    .toc-page-toggle[aria-expanded="true"] .toc-chevron {
      transform: rotate(90deg);
    }
    .toc-toggle[aria-expanded="true"] .toc-chevron {
      color: var(--color-primary);
    }

    /* ── Seiten-Toggle ───────────────────────────── */
    .toc-page-group {
      position: relative;
    }

    .toc-page-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      /* Mehr Padding → besser lesbar */
      padding: 7px var(--space-4) 7px var(--space-5);
      background: none;
      border: none;
      border-left: 3px solid transparent;
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--color-text-muted);
      text-align: left;
      gap: var(--space-2);
      transition: color .15s, background .15s, border-color .15s;
      line-height: 1.45;
      position: relative;
    }
    .toc-page-toggle:hover {
      color: var(--color-text);
      background: var(--color-surface-2);
    }

    /* Aktive Seite */
    .toc-page-toggle.active {
      color: var(--color-primary);
      font-weight: 700;
      background: color-mix(in oklab, var(--color-primary) 8%, transparent);
      border-left-color: var(--color-primary);
    }
    .toc-page-toggle[aria-expanded="true"] .toc-chevron {
      color: var(--color-primary);
    }

    /* Prüfungsseiten */
    .toc-page-pruefung {
      color: color-mix(in oklab, var(--color-warning) 70%, var(--color-text-muted)) !important;
    }
    .toc-page-pruefung:hover {
      color: var(--color-warning) !important;
    }
    .toc-page-pruefung.active {
      color: var(--color-warning) !important;
      background: color-mix(in oklab, var(--color-warning) 8%, transparent) !important;
      border-left-color: var(--color-warning) !important;
    }
    .toc-page-pruefung[aria-expanded="true"] .toc-chevron {
      color: var(--color-warning) !important;
    }

    /* ── Sublist ─────────────────────────────────── */
    .toc-sublist {
      padding: 2px 0 var(--space-2);
      margin-left: var(--space-5);
      border-left: 2px solid var(--color-border);
    }
    .toc-page-pruefung-sub {
      border-left-color: color-mix(in oklab, var(--color-warning) 30%, var(--color-border));
    }

    /* ── Abschnitts-Links ────────────────────────── */
    .toc-link {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      /* Mehr Padding → besser lesbar und klickbar */
      padding: 5px var(--space-3) 5px var(--space-3);
      font-size: 0.76rem;
      font-weight: 400;
      color: var(--color-text-faint);
      text-decoration: none;
      border-left: 2px solid transparent;
      margin-left: -2px;
      transition: color .12s, background .12s, border-color .12s, padding-left .12s;
      line-height: 1.45;
    }
    .toc-link:hover {
      color: var(--color-text);
      background: var(--color-surface-2);
      padding-left: calc(var(--space-3) + 3px);
    }

    /* Aktiver Abschnitt */
    .toc-link.toc-link--active {
      color: var(--color-primary);
      font-weight: 600;
      background: color-mix(in oklab, var(--color-primary) 7%, transparent);
      border-left-color: var(--color-primary);
      padding-left: calc(var(--space-3) + 3px);
    }
    /* Dot vor aktivem Link */
    .toc-link.toc-link--active::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--color-primary);
      flex-shrink: 0;
    }

    /* Aktiver Link in Prüfungsbereich */
    .toc-page-pruefung-sub .toc-link.toc-link--active {
      color: var(--color-warning);
      border-left-color: var(--color-warning);
      background: color-mix(in oklab, var(--color-warning) 7%, transparent);
    }
    .toc-page-pruefung-sub .toc-link.toc-link--active::before {
      background: var(--color-warning);
    }

    /* ── Divider ─────────────────────────────────── */
    .toc-divider {
      padding: var(--space-4) var(--space-5) var(--space-1);
    }
    .toc-divider-label {
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--color-text-faint);
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    .toc-divider-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--color-border);
    }

    /* ── "Nach oben" Button ──────────────────────── */
    .toc-top-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      width: calc(100% - var(--space-10));
      margin: var(--space-5) var(--space-5) 0;
      padding: var(--space-2) var(--space-4);
      background: none;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      cursor: pointer;
      font-size: 0.72rem;
      color: var(--color-text-faint);
      transition: color .15s, border-color .15s, background .15s;
    }
    .toc-top-btn:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
      background: color-mix(in oklab, var(--color-primary) 5%, transparent);
    }
  `;
  document.head.appendChild(style);
}


// ─────────────────────────────────────────────────────────
//  SCROLL PROGRESS
// ─────────────────────────────────────────────────────────
function initScrollProgress(fillEl, pctEl) {
  function update() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.round((scrollTop / docH) * 100) : 0;
    fillEl.style.width = pct + '%';
    pctEl.textContent = pct + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}


// ─────────────────────────────────────────────────────────
//  INTERSECTION OBSERVER – aktiven Abschnitt tracken
// ─────────────────────────────────────────────────────────
function initSectionObserver(linkEls) {
  const currentFile = location.pathname.split('/').pop();

  const localLinks = linkEls.filter(a => {
    const href = a.getAttribute('href') || '';
    const [file] = href.split('#');
    return href.includes('#') && (!file || file === currentFile || file === '');
  });

  if (!localLinks.length) return;

  const idToLink = {};
  localLinks.forEach(a => {
    const hash = (a.getAttribute('href') || '').split('#')[1];
    if (hash) idToLink[hash] = a;
  });

  const targets = Object.keys(idToLink)
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!targets.length) return;

  let activeId = null;
  const sidebar = document.querySelector('.sidebar');

  const observer = new IntersectionObserver(entries => {
    // Nur eintretende Elemente beachten
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;

    // Obersten sichtbaren Abschnitt als aktiv setzen
    const topEntry = visible.reduce((a, b) =>
      a.boundingClientRect.top < b.boundingClientRect.top ? a : b
    );
    const id = topEntry.target.id;
    if (id === activeId) return;
    activeId = id;

    localLinks.forEach(a => a.classList.remove('toc-link--active'));

    const activeLink = idToLink[id];
    if (activeLink) {
      activeLink.classList.add('toc-link--active');
      // Sidebar sanft zur aktiven Position scrollen
      if (sidebar) {
        const linkTop    = activeLink.offsetTop;
        const sidebarH   = sidebar.clientHeight;
        const scrollTop  = sidebar.scrollTop;
        if (linkTop < scrollTop + 40 || linkTop > scrollTop + sidebarH - 80) {
          sidebar.scrollTo({ top: linkTop - sidebarH / 3, behavior: 'smooth' });
        }
      }
    }
  }, {
    rootMargin: '-5% 0px -65% 0px',
    threshold: 0
  });

  targets.forEach(el => observer.observe(el));
}


// ─────────────────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────────────────
function renderSidebar(activePage = 'page1') {
  injectStyles();

  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  // ── Fortschrittsleiste ────────────────────────
  const progressWrap = document.createElement('div');
  progressWrap.className = 'toc-progress-wrap';
  progressWrap.innerHTML = `
    <div class="toc-progress-label">
      <span>Lesefortschritt</span>
      <span id="toc-pct-label">0%</span>
    </div>
    <div class="toc-progress-bar">
      <div class="toc-progress-fill" id="toc-progress-fill"></div>
    </div>
  `;
  aside.appendChild(progressWrap);

  // ── "INHALTSVERZEICHNIS" Titel ────────────────
  const titleEl = document.createElement('p');
  titleEl.className = 'toc-title';
  titleEl.textContent = 'Inhaltsverzeichnis';
  aside.appendChild(titleEl);

  // ── Kapitel-Toggle ────────────────────────────
  const isActivePage = (page) => !page.divider && page.id === activePage;
  const anyActive = chapter.pages.some(isActivePage);

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toc-toggle';
  toggleBtn.type = 'button';
  toggleBtn.setAttribute('aria-expanded', String(anyActive));
  toggleBtn.innerHTML = `<span>${chapter.title}</span><span class="toc-chevron">▸</span>`;

  const body = document.createElement('div');
  body.className = 'toc-body';
  if (!anyActive) body.hidden = true;

  toggleBtn.addEventListener('click', () => {
    const open = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!open));
    body.hidden = open;
  });

  aside.appendChild(toggleBtn);
  aside.appendChild(body);

  const allLinkEls = [];

  // ── Seiten iterieren ──────────────────────────
  chapter.pages.forEach(page => {

    // Divider
    if (page.divider) {
      const div = document.createElement('div');
      div.className = 'toc-divider';
      div.innerHTML = `<span class="toc-divider-label">${page.label}</span>`;
      body.appendChild(div);
      return;
    }

    const pageOpen   = isActivePage(page);
    const isPruefung = page.id === 'cheatsheet' || page.id === 'quiz';

    const pageBlock = document.createElement('div');
    pageBlock.className = 'toc-page-group';

    const toggleClass = [
      'toc-page-toggle',
      pageOpen   ? 'active'            : '',
      isPruefung ? 'toc-page-pruefung' : ''
    ].filter(Boolean).join(' ');

    const sublistClass = [
      'toc-sublist',
      isPruefung ? 'toc-page-pruefung-sub' : ''
    ].filter(Boolean).join(' ');

    const sublistHTML = page.sections.map(s =>
      `<a href="${page.href}${s.href}" class="toc-link">${s.title}</a>`
    ).join('');

    pageBlock.innerHTML = `
      <button class="${toggleClass}" type="button"
              aria-expanded="${pageOpen}">
        <span>${page.title}</span>
        <span class="toc-chevron">▸</span>
      </button>
      <div class="${sublistClass}" ${pageOpen ? '' : 'hidden'}>
        ${sublistHTML}
      </div>
    `;

    const toggle  = pageBlock.querySelector('.toc-page-toggle');
    const sublist = pageBlock.querySelector('.toc-sublist');

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      sublist.hidden = open;
    });

    pageBlock.querySelectorAll('.toc-link').forEach(a => allLinkEls.push(a));
    body.appendChild(pageBlock);
  });

  // ── "Nach oben" Button ────────────────────────
  const topBtn = document.createElement('button');
  topBtn.className = 'toc-top-btn';
  topBtn.innerHTML = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
    Nach oben
  `;
  topBtn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
  aside.appendChild(topBtn);

  // ── Observer + Progress nach DOM-Insert ───────
  // Kein requestAnimationFrame – direkt nach connectedCallback
  // werden die IDs erst im document sichtbar
  setTimeout(() => {
    const fillEl = document.getElementById('toc-progress-fill');
    const pctEl  = document.getElementById('toc-pct-label');
    if (fillEl && pctEl) initScrollProgress(fillEl, pctEl);
    initSectionObserver(allLinkEls);
  }, 0);

  return aside;
}


// ─────────────────────────────────────────────────────────
//  WEB COMPONENT
// ─────────────────────────────────────────────────────────
class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active') || 'page1';
    this.replaceWith(renderSidebar(activePage));
  }
}

customElements.define('site-sidebar', SiteSidebar);