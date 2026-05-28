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
              <a href="Page1.html" class="${active === 'page1' ? 'active' : ''}">Einführung & Grundkonzept</a>
            </li>
            <li><a href="Page1.html#ausgangssituation">Unsere <span style="color:#0d6efd;"><strong>Ausgangssituation</strong></span></a></li>
            <li><a href="Page1.html#margin-maximierung"><span style="color:#d63384;"><strong>Margin Maximierung</strong></span></a></li>
            <li><a href="Page1.html#svc"><span style="color:#198754;"><strong>SVC</strong></span> = Support Vector Classifier</a></li>

            <!-- Kapitel 2 -->
            <li class="toc-page">
              <a href="Page2.html" class="${active === 'page2' ? 'active' : ''}">Mathematische Herleitung</a>
            </li>
            <li><a href="Page2.html#margin-maximaler-margin"><span style="color:#d63384;"><strong>Margin</strong></span> – Maximaler Margin</a></li>
            <li><a href="Page2.html#normalenvektor"><span style="color:#198754;"><strong>Normalenvektor</strong></span> nicht mehr normalisiert</a></li>

            <!-- Kapitel 3 -->
            <li class="toc-page">
              <a href="Page3.html" class="${active === 'page3' ? 'active' : ''}">Hard vs. Soft Margin</a>
            </li>
            <li><a href="Page3.html#hard-soft-margin"><span style="color:#fd7e14;"><strong>Hard Margin</strong></span> vs. <span style="color:#0d6efd;"><strong>Soft Margin</strong></span></a></li>
            <li><a href="Page3.html#slack-variable"><span style="color:#6f42c1;"><strong>Slack Variable</strong></span></a></li>
            <li><a href="Page3.html#hinge-loss"><span style="color:#dc3545;"><strong>Hinge Loss</strong></span></a></li>
            <li><a href="Page3.html#c-parameter"><span style="color:#20c997;"><strong>C-Parameter</strong></span> / Regularisierung</a></li>

            <!-- Kapitel 4 -->
            <li class="toc-page">
              <a href="Page4.html" class="${active === 'page4' ? 'active' : ''}">Implementierung from Scratch</a>
            </li>
            <li><a href="Page4.html#loss-function">4.1 <span style="color:#dc3545;"><strong>Loss Function</strong></span></a></li>
            <li><a href="Page4.html#gradienten">4.2 <span style="color:#198754;"><strong>Gradienten</strong></span></a></li>
            <li><a href="Page4.html#gradientenabstieg">4.3 <span style="color:#0d6efd;"><strong>Gradientenabstieg</strong></span> – Algorithmus</a></li>
            <li><a href="Page4.html#visualisierung">4.4 <span style="color:#d63384;"><strong>Visualisierung</strong></span></a></li>

            <!-- Kapitel 5 -->
            <li class="toc-page">
              <a href="Page5.html" class="${active === 'page5' ? 'active' : ''}">Nicht-lineare Probleme & Kernel-Trick</a>
            </li>
            <li><a href="Page5.html#kernel-trick"><span style="color:#6f42c1;"><strong>Kernel-Trick</strong></span> – Projektion in höhere Dimensionen</a></li>
            <li><a href="Page5.html#multi-class"><span style="color:#198754;"><strong>Multi-Class SVMs</strong></span></a></li>

            <!-- Kapitel 6 -->
            <li class="toc-page">
              <a href="Page6.html" class="${active === 'page6' ? 'active' : ''}">Praxisanwendungen</a>
            </li>
            <li><a href="Page6.html#gesichtserkennung">6.1 <span style="color:#0d6efd;"><strong>Gesichtserkennung</strong></span></a></li>
            <li><a href="Page6.html#gesichter-anzeigen">2: Beispiel-Gesichter anzeigen</a></li>
            <li><a href="Page6.html#train-test-split">3: Features und Labels vorbereiten (Train/Test Split)</a></li>
            <li><a href="Page6.html#pca">Schritt 4: <span style="color:#d63384;"><strong>PCA</strong></span> anwenden (Dimensionsreduktion)</a></li>
            <li><a href="Page6.html#gridsearch-face">5: <span style="color:#198754;"><strong>GridSearchCV</strong></span> – Hyperparameter optimieren</a></li>
            <li><a href="Page6.html#accuracy-face">6: Quantitative Evaluation – Accuracy berechnen</a></li>
            <li><a href="Page6.html#galerie-face">7: Qualitative Evaluation – Galerie mit Vorhersagen</a></li>

            <li><a href="Page6.html#fault-classification">6.2 <span style="color:#dc3545;"><strong>Fault Classification</strong></span> – Kugellager</a></li>
            <li><a href="Page6.html#daten-laden">1: Daten laden und Zeitsignale stacken</a></li>
            <li><a href="Page6.html#fenster">2: Signale in Fenster aufteilen</a></li>
            <li><a href="Page6.html#features">3: Features berechnen (Std, Skewness, Kurtosis)</a></li>
            <li><a href="Page6.html#reshaping">4: <span style="color:#fd7e14;"><strong>Reshaping</strong></span> – Erklärung + Anwendung</a></li>
            <li><a href="Page6.html#gridsearch-bearing">5: SVM mit GridSearchCV trainieren</a></li>

            <li><a href="Page6.html#digits">6.3 <span style="color:#6f42c1;"><strong>Handschrifterkennung</strong></span> – Digits Dataset</a></li>
            <li><a href="Page6.html#digits-laden">1: Digits-Dataset laden</a></li>
            <li><a href="Page6.html#digits-train">2: Train/Test Split + SVC trainieren + vorhersagen</a></li>
            <li><a href="Page6.html#drive-mount">3: Drive mounten</a></li>
            <li><a href="Page6.html#eigenes-bild">4: [BONUS] Eigenes Bild aus Drive laden + scoren</a></li>

            <!-- Kapitel 7 -->
            <li class="toc-page">
              <a href="Page7.html" class="${active === 'page7' ? 'active' : ''}">Support Vector Regression (SVR)</a>
            </li>
            <li><a href="Page7.html#svr-linear">1: Lineare <span style="color:#198754;"><strong>SVR</strong></span> mit zwei Epsilon-Werten</a></li>
            <li><a href="Page7.html#support-vectors-finden">2: Support Vectors finden</a></li>
            <li><a href="Page7.html#svr-plot">3: SVR plotten mit Epsilon-Annotation</a></li>
            <li><a href="Page7.html#svr-nonlinear">4: Nicht-lineare SVR – Poly- und RBF-Kernel vergleichen</a></li>

            <!-- Kapitel 8 -->
            <li class="toc-page">
              <a href="Page8.html" class="${active === 'page8' ? 'active' : ''}">Vor- und Nachteile</a>
            </li>
            <li><a href="Page8.html#vor-nachteile-allgemein"><span style="color:#0d6efd;"><strong>Vor- und Nachteile von SVMs</strong></span></a></li>
            <li><a href="Page8.html#pros"><span style="color:#198754;"><strong>Pros</strong></span></a></li>
            <li><a href="Page8.html#cons"><span style="color:#dc3545;"><strong>Cons</strong></span></a></li>

            <!-- Kapitel 9 -->
            <li class="toc-page">
              <a href="Page9.html" class="${active === 'page9' ? 'active' : ''}">Formelsammlung & Code</a>
            </li>
            <li><a href="Page9.html#formelsammlung"><span style="color:#6f42c1;"><strong>Formelsammlung</strong></span></a></li>
            <li><a href="Page9.html#hyperebene-bias">Hyperebene & Bias</a></li>
            <li><a href="Page9.html#trennungsbedingung">Trennungsbedingung</a></li>
            <li><a href="Page9.html#margin-optimierung">Margin & Optimierung</a></li>
            <li><a href="Page9.html#slack-hinge">Slack Variable & Hinge Loss</a></li>
            <li><a href="Page9.html#svr-formel">SVR (Support Vector Regression)</a></li>
            <li><a href="Page9.html#multi-class-ovo">Multi-Class (One-vs-One)</a></li>
            <li><a href="Page9.html#hyperparameter">Hyperparameter-Übersicht</a></li>
            <li><a href="Page9.html#code-snippets">Code-Snippets Schnellzugriff</a></li>
            <li><a href="Page9.html#svc-trainieren">SVC instanziieren und trainieren</a></li>
            <li><a href="Page9.html#svr-trainieren">SVR instanziieren und trainieren</a></li>
            <li><a href="Page9.html#support-vectors-abrufen">Multi-Class: Support Vectors abrufen</a></li>
            <li><a href="Page9.html#gridsearch-tuning">GridSearchCV für Hyperparameter-Tuning</a></li>
            <li><a href="Page9.html#bild-klassifizieren">Eigenes Bild klassifizieren</a></li>

          </ul>
        </nav>
      </aside>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);
