class SiteHeader extends HTMLElement {
  connectedCallback() {

    // --- MathJax config ---
    window.MathJax = {
      tex: { inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']] }
    };

    // --- MathJax Script ---
    const mathjax = document.createElement('script');
    mathjax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    mathjax.async = true;
    document.head.appendChild(mathjax);

    // --- Google Fonts ---
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(fonts);

    // --- CSS ---
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'style.css';
    document.head.appendChild(css);

    // --- Highlight.js ---
    const hljsCss = document.createElement('link');
    hljsCss.rel = 'stylesheet';
    hljsCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css';
    document.head.appendChild(hljsCss);

    const hljsScript = document.createElement('script');
    hljsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    hljsScript.onload = () => {
      document.querySelectorAll('pre code').forEach((block) => {
        block.classList.add('language-python');
        window.hljs.highlightElement(block);
      });
    };
    document.head.appendChild(hljsScript);

    // --- Header HTML ---
    const page = this.getAttribute('active');
    const title = this.getAttribute('title') || 'PRM';
    document.title = title;

    this.innerHTML = `
      <header class="topbar">
        <div class="topbar-inner">

          <!-- LINKS: Home-Button -->
          <a href="../index.html" class="home-btn" title="Alle Kapitel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/>
              <path d="M9 21V12h6v9"/>
            </svg>
          </a>

          <!-- MITTE: Kapitel-Navigation -->
          <nav class="chapter-nav-top">
            <a href="../Kapitel1/Page1.html" ${page === 'page1' ? 'class="active"' : ''}>1</a>
            <a href="../Kapitel2/Page1.html" ${page === 'page2' ? 'class="active"' : ''}>2</a>
            <a href="../Kapitel3/Page1.html" ${page === 'page3' ? 'class="active"' : ''}>3</a>
            <a href="../Kapitel4/Page1.html" ${page === 'page4' ? 'class="active"' : ''}>4-Clustering</a>
            <a href="../Kapitel5/Page1.html" ${page === 'page5' ? 'class="active"' : ''}>5</a>
            <a href="../Kapitel6/Page1.html" ${page === 'page6' ? 'class="active"' : ''}>6</a>
            <a href="../Kapitel6/Page1.html" ${page === 'page6' ? 'class="active"' : ''}>7</a>
          </nav>

          <!-- RECHTS: Modus -->
          <button class="theme-toggle" data-theme-toggle>🌙 Modus</button>

        </div>
      </header>
    `;

    // --- Theme Toggle ---
    this.querySelector('[data-theme-toggle]').addEventListener('click', () => {
      const html = document.documentElement;
      html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
      this.querySelector('[data-theme-toggle]').textContent =
        html.dataset.theme === 'dark' ? '☀️ Modus' : '🌙 Modus';
    });
  }
}
customElements.define('site-header', SiteHeader);
