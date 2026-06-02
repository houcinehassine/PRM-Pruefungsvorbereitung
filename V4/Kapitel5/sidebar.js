// ─────────────────────────────────────────────────────────
//  Kapitel5/Sidebar.js  –  Nur Daten, Logik kommt aus Core
// ─────────────────────────────────────────────────────────
import { registerSidebar } from '../js_codes/sidebar-core.js';

const chapter = {
  title: 'Kapitel 5 · Ensemble-Methoden',
  pages: [
    {
      id: 'page1',
      href: 'Page01.html',
      title: '1. Überblick & Einführung',
      sections: [
        { href: '#wo-befinden-wir-uns', title: 'Wo befinden wir uns?' },
        { href: '#themen-uebersicht',   title: 'Themen-Überblick' },
        { href: '#rf-pros',             title: 'Vorteile Random Forest' },
        { href: '#rf-cons',             title: 'Nachteile Random Forest' }
      ]
    },
    {
      id: 'page2',
      href: 'Page02.html',
      title: '2. Entscheidungsbäume',
      sections: [
        { href: '#entscheidungsbaeume-grundlagen', title: 'Grundlagen' },
        { href: '#splits-feature-raum',            title: 'Splits im Feature-Raum' },
        { href: '#gini-impurity',                  title: 'Gini Impurity' },
        { href: '#overfitting-decision-trees',     title: 'Overfitting' }
      ]
    },
    {
      id: 'page3',
      href: 'Page03.html',
      title: '3. Vom Baum zum Random Forest',
      sections: [
        { href: '#ensemble-idee',   title: 'Ensemble-Idee' },
        { href: '#bagging',         title: 'Bagging & Bootstrapping' },
        { href: '#oob-error',       title: 'Out-of-Bag Error' },
        { href: '#feature-bagging', title: 'Feature Bagging' }
      ]
    },
    {
      id: 'page4',
      href: 'Page04.html',
      title: '4. Praxis in sklearn',
      sections: [
        { href: '#random-forest-sklearn', title: 'RandomForestClassifier' },
        { href: '#predict-proba',         title: '.predict_proba()' },
        { href: '#hyperparameter-sweep',  title: 'Hyperparameter Sweep' },
        { href: '#random-search',         title: 'Random Search' },
        { href: '#bayesian-optimization', title: 'Bayesian Optimization' }
      ]
    },
    {
      id: 'page5',
      href: 'Page05.html',
      title: '5. Interpretation & Vertrauen',
      sections: [
        { href: '#feature-importance',     title: 'Feature Importance' },
        { href: '#permutation-importance', title: 'Permutation Importance' },
        { href: '#permutation-sklearn',    title: 'Permutation in sklearn' },
        { href: '#white-box-eignungstest', title: 'White-Box Beispiel' }
      ]
    },
    {
      id: 'page6',
      href: 'Page06.html',
      title: '6. Anwendungen im PRM-Kontext',
      sections: [
        { href: '#rul-einfuehrung',     title: 'Einführung RUL' },
        { href: '#nasa-datensatz',      title: 'NASA Turbofan-Datensatz' },
        { href: '#crude-approximation', title: 'Crude Approximation' },
        { href: '#baseline-models',     title: 'Baseline Models' }
      ]
    },
    {
      id: 'page6_1',
      href: 'Page06_1.html',
      title: '6.1 Servo Fault Classification',
      sections: [
        { href: '#servo-problem',      title: 'Problemstellung' },
        { href: '#servo-daten',        title: 'Datengenerierung' },
        { href: '#servo-training',     title: 'Modell trainieren' },
        { href: '#servo-unsicherheit', title: 'Unsicherheitsvisualisierung' }
      ]
    },
    {
      id: 'page6_2',
      href: 'Page06_2.html',
      title: '6.2 Random Forest Regression',
      sections: [
        { href: '#regression-grundidee',      title: 'Grundidee Regression' },
        { href: '#mse-kriterium',             title: 'MSE statt Gini' },
        { href: '#rf-regressor-sklearn',      title: 'RandomForestRegressor' },
        { href: '#regression-visualisierung', title: 'Visualisierung max_depth' }
      ]
    },
    {
      id: 'page7',
      href: 'Page07.html',
      title: '7. Boosting als Gegenkonzept',
      sections: [
        { href: '#boosting-grundidee',      title: 'Boosting vs. Bagging' },
        { href: '#adaboost-algorithmus',    title: 'AdaBoost Algorithmus' },
        { href: '#adaboost-formeln',        title: 'Formeln & Gewichte' },
        { href: '#adaboost-visualisierung', title: 'Visualisierung' }
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
        { href: '#formeln',        title: 'Alle Formeln' },
        { href: '#sklearn-api',    title: 'sklearn API' },
        { href: '#entscheidungen', title: 'Entscheidungsregeln' },
        { href: '#fallen',         title: 'Typische Fallen' },
        { href: '#merksaetze',     title: 'Merksätze' }
      ]
    },
    {
      id: 'quiz',
      href: 'PageQuiz.html',
      title: '🧠 Quiz',
      sections: [
        { href: '#konzept-fragen', title: 'Konzeptfragen' },
        { href: '#formel-fragen',  title: 'Formelfragen' },
        { href: '#code-fragen',    title: 'Code-Fragen' },
        { href: '#fallen-fragen',  title: '🪤 Fallen' }
      ]
    }
  ]
};

registerSidebar(chapter);