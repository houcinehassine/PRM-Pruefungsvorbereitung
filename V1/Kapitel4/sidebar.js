class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active');
    this.innerHTML = `
      <aside class="sidebar">
        <nav class="toc">
          <p class="toc-title">INHALTSVERZEICHNIS</p>
          <ul>

            <!-- Grundlagen -->
            <li class="toc-page"><a href="Page1.html">1. Grundlagen</a></li>
            <li class="toc-sub"><a href="Page1.html#ziel">Ziel und Einordnung</a></li>
            <li class="toc-sub"><a href="Page1.html#typen">Grundtypen</a></li>
            <li class="toc-sub"><a href="Page1.html#kmeans">k-means</a></li>
            <li class="toc-sub"><a href="Page1.html#kmeans-sklearn">k-means in sklearn</a></li>
            <li class="toc-sub"><a href="Page1.html#em">Expectation-Maximization</a></li>
            <li class="toc-sub"><a href="Page1.html#ablauf">Formaler Ablauf</a></li>

            <!-- k-means vertieft -->
            <li class="toc-page"><a href="Page2.html">2. k-means und Varianten</a></li>
            <li class="toc-sub"><a href="Page2.html#scratch">k-means from Scratch</a></li>
            <li class="toc-sub"><a href="Page2.html#schwaechen">Schwächen</a></li>
            <li class="toc-sub"><a href="Page2.html#varianten">Varianten</a></li>
            <li class="toc-sub"><a href="Page2.html#vor-nachteile">Vor- und Nachteile</a></li>

            <!-- Validierung -->
            <li class="toc-page"><a href="Page3.html">3. Gütekriterien & Auswahl von k</a></li>
            <li class="toc-sub"><a href="Page3.html#arten">Validierung</a></li>
            <li class="toc-sub"><a href="Page3.html#masse">Validierungsmaße</a></li>
            <li class="toc-sub"><a href="Page3.html#elbow">SSE und Elbow Plot</a></li>
            <li class="toc-sub"><a href="Page3.html#nichtlinear">Nichtlineare Strukturen</a></li>
            <li class="toc-sub"><a href="Page3.html#scaling">Scaling</a></li>

            <!-- DBSCAN -->
            <li class="toc-page"><a href="Page4.html">4. dichtebasiertes Clustering</a></li>
            <li class="toc-sub"><a href="Page4.html#dbscan">DBSCAN</a></li>
            <li class="toc-sub"><a href="Page4.html#knn">Neue Punkte zuordnen</a></li>
            <li class="toc-sub"><a href="Page4.html#brownfield">Brownfield-Beispiel</a></li>
            <li class="toc-sub"><a href="Page4.html#vergleich">Vergleich aller Algorithmen</a></li>

            <li class="toc-page"><a href="Page5.html" ${active === 'page5' ? 'class="active"' : ''}>Formelsammlung</a></li>
            <li class="toc-sub"><a href="Page5.html#formeln">Formelsammlung</a></li>
            <li class="toc-sub"><a href="Page5.html#code">Code-Sammlung</a></li>
            <li class="toc-sub"><a href="Page5.html#stichwort">Stichwortverzeichnis</a></li>

            <li class="toc-page"><a href="Page6.html" ${active === 'page6' ? 'class="active"' : ''}>Reflexion & Vertiefung</a></li>
            <li class="toc-sub"><a href="Page6.html#reflexion">Reflexionsfragen</a></li>
            <li class="toc-sub"><a href="Page6.html#dbscan-hyper">DBSCAN Hyperparameter</a></li>
            <li class="toc-sub"><a href="Page6.html#dbscan-neue-punkte">Neue Punkte zuordnen</a></li>
            <li class="toc-sub"><a href="Page6.html#dbscan-pro-con">Vor- und Nachteile DBSCAN</a></li>
            <li class="toc-sub"><a href="Page6.html#vergleich">Vergleich Verfahren</a></li>
          </ul>
        </nav>
      </aside>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);
