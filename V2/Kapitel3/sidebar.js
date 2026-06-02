/* ============================================================
   PRM – Kapitel3/sidebar.js  |  Stand 30.05.2026
   ============================================================ */

class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active');

    this.innerHTML = `
      <aside class="sidebar">
        <nav class="toc" aria-label="Inhaltsverzeichnis Kapitel 3">

          <p class="toc-title">Kapitel 3 – Klassifikation</p>

          <ul>

            <!-- ── Seite 1 ── -->
            <li class="toc-page">
              <a href="Page1.html" ${active === 'page1' ? 'class="active"' : ''}>
                1. Einführung & Grundkonzept
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#ausgangssituation">
                <span style="color:#0d6efd"><strong>Ausgangssituation</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#margin-maximierung">
                <span style="color:#d63384"><strong>Margin Maximierung</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#svc">
                <span style="color:#198754"><strong>SVC</strong></span>
                – Support Vector Classifier
              </a>
            </li>

            <!-- ── Seite 2 ── -->
            <li class="toc-page">
              <a href="Page2.html" ${active === 'page2' ? 'class="active"' : ''}>
                2. Mathematische Herleitung
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page2.html#margin">
                <span style="color:#d63384"><strong>Margin</strong></span>
                – Maximaler Margin
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page2.html#normalenvektor">
                <span style="color:#198754"><strong>Normalenvektor</strong></span>
                – nicht mehr normalisiert
              </a>
            </li>

            <!-- ── Seite 3 ── -->
            <li class="toc-page">
              <a href="Page3.html" ${active === 'page3' ? 'class="active"' : ''}>
                3. Hard vs. Soft Margin
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#hard-soft-margin">
                <span style="color:#fd7e14"><strong>Hard Margin</strong></span>
                vs.
                <span style="color:#0d6efd"><strong>Soft Margin</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#slack-variable">
                <span style="color:#6f42c1"><strong>Slack Variable</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#hinge-loss">
                <span style="color:#dc3545"><strong>Hinge Loss</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#c-parameter">
                <span style="color:#20c997"><strong>C-Parameter</strong></span>
                – Regularisierung
              </a>
            </li>

            <!-- ── Seite 4 ── -->
            <li class="toc-page">
              <a href="Page4.html" ${active === 'page4' ? 'class="active"' : ''}>
                4. Implementierung from Scratch
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#loss-function">
                <span style="color:#dc3545"><strong>Loss Function</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#gradienten">
                <span style="color:#198754"><strong>Gradienten</strong></span>
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#gradientenabstieg">
                <span style="color:#0d6efd"><strong>Gradientenabstieg</strong></span>
                – Algorithmus
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#visualisierung">
                <span style="color:#d63384"><strong>Visualisierung</strong></span>
              </a>
            </li>

            <!-- ── Seite 5 ── -->
            <li class="toc-page">
              <a href="Page5.html" ${active === 'page5' ? 'class="active"' : ''}>
                5. Nicht-lineare Probleme & Kernel-Trick
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page5.html#kernel-trick">
                <span style="color:#6f42c1"><strong>Kernel-Trick</strong></span>
                – Projektion in höhere Dimensionen
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page5.html#multi-class">
                <span style="color:#198754"><strong>Multi-Class SVMs</strong></span>
              </a>
            </li>

            <!-- ── Seite 6 ── -->
            <li class="toc-page">
              <a href="Page6.html" ${active === 'page6' ? 'class="active"' : ''}>
                6. Support Vector Regression (SVR)
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page6.html#svr-linear">
                Lineare
                <span style="color:#198754"><strong>SVR</strong></span>
                mit zwei Epsilon-Werten
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page6.html#support-vectors-finden">
                Support Vectors finden
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page6.html#svr-plot">
                SVR plotten mit Epsilon-Annotation
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page6.html#svr-nonlinear">
                Nicht-lineare SVR – Poly- & RBF-Kernel vergleichen
              </a>
            </li>

            <!-- ── Seite 7 ── -->
            <li class="toc-page">
              <a href="Page7.html" ${active === 'page7' ? 'class="active"' : ''}>
                7. Praxisanwendungen
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page71.html" ${active === 'page71' ? 'class="active"' : ''}>
                7.1 Gesichtserkennung
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page72.html" ${active === 'page72' ? 'class="active"' : ''}>
                7.2 Classification
              </a>
            </li>
            <li class="toc-sub">
              <a href="Page73.html" ${active === 'page73' ? 'class="active"' : ''}>
                7.3 Handschrifterkennung
              </a>
            </li>

            <!-- ── Seite 8 ── -->
            <li class="toc-page">
              <a href="Page8.html" ${active === 'page8' ? 'class="active"' : ''}>
                <span style="color:#6f42c1"><strong>📋 Formelsammlung</strong></span>
              </a>
            </li>

            <!-- ── Seite 9 ── -->
            <li class="toc-page">
              <a href="Page9.html" ${active === 'page9' ? 'class="active"' : ''}>
                ⚙️ Hyperparameter
              </a>
            </li>

            <!-- ── Seite 10 ── -->
            <li class="toc-page">
              <a href="Page10.html" ${active === 'page10' ? 'class="active"' : ''}>
                💻 Code-Snippets & Schnellzugriff
              </a>
            </li>

          </ul>
        </nav>
      </aside>
    `;
  }
}

customElements.define('site-sidebar', SiteSidebar);