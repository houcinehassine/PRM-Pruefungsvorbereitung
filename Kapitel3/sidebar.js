class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active');
    this.innerHTML = `
      <aside class="sidebar">
        <nav class="toc">
          <p class="toc-title">INHALTSVERZEICHNIS</p>
          <ul>

            <!-- Kapitel 1 -->
            <li class="toc-page">
              <a href="Page1.html" class="${active === 'page1' ? 'active' : ''}">1. Einführung & Grundkonzept</a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#ausgangssituation">    Unsere <span style="color:#0d6efd;"><strong>Ausgangssituation</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#margin-maximierung">    <span style="color:#d63384;"><strong>Margin Maximierung</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page1.html#svc">    <span style="color:#198754;"><strong>SVC</strong></span> = Support Vector Classifier</a>
            </li>

            <!-- Kapitel 2 -->
            <li class="toc-page">
              <a href="Page2.html" class="${active === 'page2' ? 'active' : ''}">2. Mathematische Herleitung</a>
            </li>
            <li class="toc-sub">
              <a href="Page2.html#margin-maximaler-margin">    <span style="color:#d63384;"><strong>Margin</strong></span> – Maximaler Margin</a>
            </li>
            <li class="toc-sub">
              <a href="Page2.html#normalenvektor">    <span style="color:#198754;"><strong>Normalenvektor</strong></span> nicht mehr normalisiert</a>
            </li>

            <!-- Kapitel 3 -->
            <li class="toc-page">
              <a href="Page3.html" class="${active === 'page3' ? 'active' : ''}">3. Hard vs. Soft Margin</a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#hard-soft-margin">    <span style="color:#fd7e14;"><strong>Hard Margin</strong></span> vs. <span style="color:#0d6efd;"><strong>Soft Margin</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#slack-variable">    <span style="color:#6f42c1;"><strong>Slack Variable</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#hinge-loss">    <span style="color:#dc3545;"><strong>Hinge Loss</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page3.html#c-parameter">    <span style="color:#20c997;"><strong>C-Parameter</strong></span> / Regularisierung</a>
            </li>
            
            <!-- Kapitel 4 -->
            <li class="toc-page">
              <a href="Page4.html" class="${active === 'page4' ? 'active' : ''}">4. Implementierung from Scratch</a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#loss-function">    1 <span style="color:#dc3545;"><strong>Loss Function</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#gradienten">    2 <span style="color:#198754;"><strong>Gradienten</strong></span></a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#gradientenabstieg">    3 <span style="color:#0d6efd;"><strong>Gradientenabstieg</strong></span> – Algorithmus</a>
            </li>
            <li class="toc-sub">
              <a href="Page4.html#visualisierung">    4 <span style="color:#d63384;"><strong>Visualisierung</strong></span></a>
            </li>

            <!-- Kapitel 5 -->
            <li class="toc-page">
              <a href="Page5.html" class="${active === 'page5' ? 'active' : ''}">5. Nicht-lineare Probleme & Kernel-Trick</a>
            </li>
            <li class="toc-sub">
              <a href="Page5.html#kernel-trick">    <span style="color:#6f42c1;">    <strong>Kernel-Trick</strong></span> – Projektion in höhere Dimensionen</a>
            </li>
            <li class="toc-sub">
              <a href="Page5.html#multi-class">    <span style="color:#198754;">    <strong>Multi-Class SVMs</strong></span></a>
            </li>

            <!-- Kapitel 6 -->
            <li class="toc-page">
              <a href="Page7.html" class="${active === 'page7' ? 'active' : ''}">6. Support Vector Regression (SVR)</a>
            </li>
            <!--
            <li class="toc-sub">
              <a href="Page7.html#svr-linear">    1: Lineare <span style="color:#198754;"><strong>SVR</strong></span> mit zwei Epsilon-Werten</a>
            </li>
            <li class="toc-sub">
              <a href="Page7.html#support-vectors-finden">    2: Support Vectors finden</a>
            </li>
            <li class="toc-sub">
              <a href="Page7.html#svr-plot">    3: SVR plotten mit Epsilon-Annotation</a>
            </li>
            <li class="toc-sub">
              <a href="Page7.html#svr-nonlinear">    4: Nicht-lineare SVR – Poly- und RBF-Kernel vergleichen</a>
            </li>
            -->
            <li class="toc-sub">
              <a href="Page8.html#vor-nachteile-allgemein"><span style="color:#0d6efd;">    <strong>Vor- und Nachteile von SVMs</strong></span></a>
            </li>

            <!-- Kapitel 7 -->
            <li class="toc-page">
              <a href="Page6.html" class="${active === 'page6' ? 'active' : ''}">7. Praxisanwendungen</a>
            </li>

            <!-- Kapitel 7-1 -->
            <li class="toc-sub">
              <a href="Page6_1.html" class="${active === 'page6' ? 'active' : ''}">7.1 gesichtserkennung</a>
            </li>

            <!-- Kapitel 7-2 -->
            <li class="toc-sub">
              <a href="Page6_2.html" class="${active === 'page6' ? 'active' : ''}">7.2 classification</a>
            </li>

            <!-- Kapitel 7-3 -->
            <li class="toc-sub">
              <a href="Page6_3.html" class="${active === 'page6' ? 'active' : ''}">7.3 Handschrifterkennung</a>
            </li>


            <!-- Kapitel 8 -->
            <li class="toc-page">
              <a href="Page8.html" class="${active === 'page8' ? 'active' : ''}"><span style="color:#6f42c1;"><strong>Formelsammlung</strong></span></a>
            </li>

            <!-- Kapitel 9 -->
            <li class="toc-page">
              <a href="Page9.html" class="${active === 'page8' ? 'active' : ''}">Hyperparameter</a>
            </li>

            <!-- Kapitel 10 -->
            <li class="toc-page">
              <a href="Page10.html" class="${active === 'page8' ? 'active' : ''}">Code-Snippets Schnellzugriff</a>
            </li>
          </ul>
        </nav>
      </aside>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);
