# Composant ExpandableSection

Ce projet contient un composant `ExpandableSection` réalisé avec React, TypeScript, TailwindCSS et shadcn/ui. Ce composant est une section qui peut être étendue ou réduite par l'utilisateur.

## Fonctionnalités

- **Extensible** : L'utilisateur peut étendre la section pour afficher plus de contenu.
- **Rétractable** : L'utilisateur peut réduire la section pour masquer le contenu.
- **Animation** : L'expansion et la rétraction de la section sont animées pour une meilleure expérience utilisateur.

## Technologies utilisées

- [React](https://reactjs.org/) : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- [TypeScript](https://www.typescriptlang.org/) : Un sur-ensemble typé de JavaScript qui ajoute des types statiques.
- [TailwindCSS](https://tailwindcss.com/) : Un framework CSS utilitaire pour un développement rapide de l'interface utilisateur.
- [shadcn/ui](https://github.com/shadcn/ui) : Une bibliothèque d'interface utilisateur pour React.

## Utilisation

Le composant `ExpandableSection` est situé dans le fichier [src/components/ExpandableSection.tsx](src/components/ExpandableSection.tsx). Vous pouvez l'utiliser dans votre application React comme n'importe quel autre composant React.

```tsx
import ExpandableSection from './components/ExpandableSection';

function App() {
 return (
  <div>
   <ExpandableSection />
  </div>
 );
}

export default App;
