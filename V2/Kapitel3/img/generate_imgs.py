"""
PRM Kapitel 3 – Alle Plot-Bilder auf einmal erstellen
Ausführen: python Kapitel3/img/generate_imgs.py
"""
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')  # Kein Fenster öffnen, direkt speichern

import numpy as np
from sklearn.datasets import make_blobs
from sklearn.svm import SVC
import os

# Zielordner sicherstellen
os.makedirs('img', exist_ok=True)

# ── Datensatz ────────────────────────────────────────────────
X, y = make_blobs(n_samples=100, centers=2,
                  random_state=2, cluster_std=1.2)

# ── Hilfsfunktion ────────────────────────────────────────────
def plot_svc_decision_function(model, ax, plot_support=True):
    xlim = ax.get_xlim()
    ylim = ax.get_ylim()
    x = np.linspace(xlim[0], xlim[1], 30)
    y_grid = np.linspace(ylim[0], ylim[1], 30)
    Y, X_grid = np.meshgrid(y_grid, x)
    xy = np.vstack([X_grid.ravel(), Y.ravel()]).T
    P = model.decision_function(xy).reshape(X_grid.shape)
    ax.contour(X_grid, Y, P, colors='k', levels=[-1, 0, 1],
               alpha=0.5, linestyles=['--', '-', '--'])
    if plot_support:
        ax.scatter(model.support_vectors_[:, 0],
                   model.support_vectors_[:, 1],
                   s=300, linewidth=1,
                   facecolors='none', edgecolors='black')
    ax.set_xlim(xlim)
    ax.set_ylim(ylim)

# ════════════════════════════════════════════════════════════
# 1. ausgangssituation.png
# ════════════════════════════════════════════════════════════
fig, ax = plt.subplots(figsize=(6, 4))
ax.scatter(X[:, 0], X[:, 1], c=y, s=50,
           cmap='autumn', edgecolors='gray')
ax.set_title("Zwei-Klassen-Datensatz im 2D-Feature-Raum")
ax.set_xlabel("Feature 1")
ax.set_ylabel("Feature 2")
plt.tight_layout()
plt.savefig('img/ausgangssituation.png', dpi=150)
plt.close()
print("✅ ausgangssituation.png")

# ════════════════════════════════════════════════════════════
# 2. margin_vergleich.png
# ════════════════════════════════════════════════════════════
xfit = np.linspace(-3, 2)
fig, ax = plt.subplots(figsize=(6, 4))
ax.scatter(X[:, 0], X[:, 1], c=y, s=50,
           cmap='autumn', edgecolors='gray')
for m, b, d in [(-1.5, -6, 0.33),
                ( 0.5, -5, 0.55),
                (-0.1, -5.5, 0.20)]:
    yfit = m * xfit + b
    ax.plot(xfit, yfit, '-k', linewidth=1)
    ax.fill_between(xfit, yfit - d, yfit + d,
                    edgecolor='none', color='#AAAAAA', alpha=0.4)
ax.set_xlim(-3, 2)
ax.set_title("Drei mögliche Trennlinien mit Margin")
plt.tight_layout()
plt.savefig('img/margin_vergleich.png', dpi=150)
plt.close()
print("✅ margin_vergleich.png")

# ════════════════════════════════════════════════════════════
# 3. svc_linear.png
# ════════════════════════════════════════════════════════════
model = SVC(kernel='linear', C=1.0).fit(X, y)
fig, ax = plt.subplots(figsize=(6, 4))
ax.scatter(X[:, 0], X[:, 1], c=y, s=50,
           cmap='autumn', edgecolors='gray')
ax.set_xlim(-3, 2)
ax.set_ylim(-10, 5)
plot_svc_decision_function(model, ax)
ax.scatter(model.support_vectors_[:, 0],
           model.support_vectors_[:, 1],
           s=300, lw=1.5,
           facecolors='none', edgecolors='blue',
           label='Support Vectors')
ax.set_title(f'SVC linear · C = {model.C}')
ax.legend()
plt.tight_layout()
plt.savefig('img/svc_linear.png', dpi=150)
plt.close()
print("✅ svc_linear.png")

# ════════════════════════════════════════════════════════════
# 4. margin_herleitung.png  (für Page2)
# ════════════════════════════════════════════════════════════
fig, ax = plt.subplots(figsize=(6, 4))
ax.scatter(X[:, 0], X[:, 1], c=y, s=50,
           cmap='autumn', edgecolors='gray')
ax.set_xlim(-3, 2)
ax.set_ylim(-10, 5)
plot_svc_decision_function(model, ax, plot_support=True)
ax.set_title("Margin: 2 / ‖w‖  –  Support Vectors auf dem Rand")
plt.tight_layout()
plt.savefig('img/margin_herleitung.png', dpi=150)
plt.close()
print("✅ margin_herleitung.png")

print("\n🎉 Alle Bilder erstellt in: Kapitel3/img/")

# ════════════════════════════════════════════════════════════
# 5. hard_soft_margin.png
# ════════════════════════════════════════════════════════════
from sklearn.datasets import make_blobs
from sklearn.svm import SVC

X2, y2 = make_blobs(n_samples=100, centers=2,
                    random_state=0, cluster_std=0.8)

model_hard = SVC(kernel='linear', C=10.0).fit(X2, y2)
model_soft = SVC(kernel='linear', C=0.1).fit(X2, y2)

fig, ax = plt.subplots(figsize=(6, 4))
ax.scatter(X2[:, 0], X2[:, 1], c=y2, s=50,
           cmap='autumn', edgecolors='gray')
ax.set_title("Hard vs. Soft Margin")
ax.set_xlabel("Feature 1")
ax.set_ylabel("Feature 2")
plt.tight_layout()
plt.savefig('img/hard_soft_margin.png', dpi=150, bbox_inches='tight')
plt.close()
print("✅ hard_soft_margin.png")