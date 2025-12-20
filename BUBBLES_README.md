# 🌊 Background Animé - Bulles Flottantes

Système de background animé avec des bulles flottantes pour le portfolio cybersécurité.

## ✨ Caractéristiques

- ✅ **Bulles flottantes animées** - Mouvement fluide et organique
- ✅ **Rebond sur les bords** - Détection de collision réaliste
- ✅ **Effet glassmorphism** - Flou et transparence élégants
- ✅ **Adaptation automatique** - Utilise les couleurs du thème (dark/light mode)
- ✅ **Performance optimisée** - 60 FPS avec Canvas et requestAnimationFrame
- ✅ **Accessibilité** - Respecte `prefers-reduced-motion`
- ✅ **Interaction souris** - Repulsion douce des bulles (bonus)
- ✅ **Responsive** - Nombre de bulles adapté à la taille de l'écran

## 🎨 Style Visuel

- **Semi-transparent** : Opacité de 15% par défaut
- **Flou** : Effet de blur de 40px
- **Lumineux** : Gradient radial pour effet de lumière
- **Couleurs du thème** : Utilise `--accent-primary` (bleu) et `--accent-secondary` (vert)
- **Taille variable** : Rayon entre 40px et 120px

## ⚙️ Configuration

Toutes les variables sont configurables dans `script.js` dans l'objet `CONFIG` :

```javascript
const CONFIG = {
    // Nombre de bulles selon la taille de l'écran
    bubbleCount: {
        mobile: 8,      // Écrans < 768px
        tablet: 12,     // Écrans 768px - 1024px
        desktop: 20     // Écrans > 1024px
    },
    // Vitesse de déplacement
    minSpeed: 0.3,
    maxSpeed: 0.8,
    // Taille des bulles
    minRadius: 40,
    maxRadius: 120,
    // Opacité (0.0 - 1.0)
    opacity: 0.15,
    // Flou en pixels
    blur: 40,
    // Interaction avec la souris
    mouseInteraction: true,
    mouseRadius: 150,      // Rayon d'influence de la souris
    mouseStrength: 0.02    // Force de repulsion
};
```

## 🔧 Personnalisation

### Changer le nombre de bulles

Modifiez les valeurs dans `CONFIG.bubbleCount` :

```javascript
bubbleCount: {
    mobile: 10,    // Plus de bulles sur mobile
    tablet: 15,
    desktop: 25
}
```

### Ajuster la vitesse

Modifiez `minSpeed` et `maxSpeed` :

```javascript
minSpeed: 0.2,  // Plus lent
maxSpeed: 1.0   // Plus rapide
```

### Modifier l'opacité

Changez `opacity` (entre 0.0 et 1.0) :

```javascript
opacity: 0.25,  // Plus visible
// ou
opacity: 0.1,   // Plus discret
```

### Ajuster le flou

Modifiez `blur` en pixels :

```javascript
blur: 60,  // Plus flou
// ou
blur: 20,  // Moins flou
```

### Désactiver l'interaction souris

```javascript
mouseInteraction: false
```

## 📱 Responsive

Le système s'adapte automatiquement :

- **Mobile** (< 768px) : 8 bulles
- **Tablette** (768px - 1024px) : 12 bulles
- **Desktop** (> 1024px) : 20 bulles

Le canvas se redimensionne automatiquement lors du redimensionnement de la fenêtre.

## ♿ Accessibilité

Le système respecte `prefers-reduced-motion` :

- Si l'utilisateur a activé "Réduire les animations" dans ses préférences système
- Le canvas est automatiquement masqué
- Aucune animation n'est lancée

## 🎯 Performance

### Optimisations incluses

1. **Canvas** : Utilisation de Canvas API pour de meilleures performances
2. **requestAnimationFrame** : Animation fluide à 60 FPS
3. **Pause automatique** : L'animation se pause quand la page n'est pas visible
4. **Nombre adaptatif** : Moins de bulles sur mobile pour meilleures performances

### Mode performance faible

Pour activer un mode performance faible, modifiez `CONFIG` :

```javascript
bubbleCount: {
    mobile: 5,
    tablet: 8,
    desktop: 12
},
opacity: 0.1,  // Moins d'opacité = moins de calculs
blur: 20       // Moins de flou = meilleures performances
```

## 🎨 Couleurs

Les bulles utilisent automatiquement les couleurs du thème :

- **Dark mode** : `--accent-primary` (bleu #00d9ff) et `--accent-secondary` (vert #00ff88)
- **Light mode** : S'adapte automatiquement aux couleurs du thème clair

Pour ajouter d'autres couleurs, modifiez la fonction `initBubbles()` :

```javascript
const colors = [
    hexToRgb(primaryColor),
    hexToRgb(secondaryColor),
    hexToRgb('#ff4757'),  // Ajouter une couleur rouge
    hexToRgb('#ffa502')   // Ajouter une couleur orange
];
```

## 🐛 Dépannage

### Les bulles ne s'affichent pas

1. Vérifiez que le canvas existe : `<canvas id="bubblesCanvas"></canvas>`
2. Vérifiez la console pour les erreurs JavaScript
3. Vérifiez que `prefers-reduced-motion` n'est pas activé

### Performance faible

1. Réduisez le nombre de bulles dans `CONFIG.bubbleCount`
2. Réduisez `opacity` et `blur`
3. Désactivez `mouseInteraction`

### Les bulles passent au-dessus du contenu

Vérifiez que le canvas a `z-index: -1` dans le CSS :

```css
.bubbles-background {
    z-index: -1;
}
```

Et que les sections ont `position: relative` et `z-index: 1`.

## 📝 Structure du code

```
script.js
├── CONFIG (configuration)
├── Classe Bubble
│   ├── constructor() - Initialisation
│   ├── update() - Mise à jour position
│   └── draw() - Dessin sur canvas
├── hexToRgb() - Conversion couleur
└── initBubbles() - Initialisation système
```

## 🚀 Intégration

Le système est déjà intégré dans le portfolio :

1. **HTML** : Canvas ajouté dans `<body>`
2. **CSS** : Styles dans `styles.css`
3. **JavaScript** : Code dans `script.js`

Aucune action supplémentaire n'est nécessaire, le système se lance automatiquement au chargement de la page.

## 📄 Licence

Inclus dans le portfolio CyberFolio - Libre d'utilisation et modification.

---

**💡 Astuce** : Pour tester différentes configurations, modifiez `CONFIG` dans `script.js` et rechargez la page.

