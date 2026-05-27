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


    // ==========================================
    // --- NEU: Highlight.js für Python-Code ---
    // ==========================================
    
    // 1. Highlight.js CSS laden (Theme: default)
    const hljsCss = document.createElement('link');
    hljsCss.rel = 'stylesheet';
    hljsCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css';
    document.head.appendChild(hljsCss);

    // 2. Highlight.js Script laden
    const hljsScript = document.createElement('script');
    hljsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    
    // 3. Sobald Highlight.js geladen ist, alle Code-Blöcke auf der Seite färben
    hljsScript.onload = () => {
      document.querySelectorAll('pre code').forEach((block) => {
        // Macht jeden Code-Block automatisch zu Python
        block.classList.add('language-python');
        window.hljs.highlightElement(block);
      });
    };
    document.head.appendChild(hljsScript);
    // ==========================================


    // --- Header HTML ---
    const page = this.getAttribute('active');
    const title = this.getAttribute('title') || 'PRM';
    document.title = title;

    this.innerHTML = `
      <header class="topbar">
        <div class="topbar-inner">

          <!-- LINKS: Projektname -->
          <div class="brand">
            <div class="logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="7" cy="12" r="2.5"/>
                <circle cx="17" cy="7" r="2.5"/>
                <circle cx="17" cy="17" r="2.5"/>
                <path d="M9.4 10.8l5.2-2.6M9.4 13.2l5.2 2.6"/>
              </svg>
            </div>
            PRM – Prüfungsvorbereitung
          </div>

          <!-- MITTE: Kapitel-Titel -->
          <div class="topbar-title">
            Kapitel 4: Clustering
          </div>

          <!-- RECHTS: Modus -->
          <button class="theme-toggle" data-theme-toggle>🌙 Modus</button>

        </div>
      </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);
