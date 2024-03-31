# ExpandableDemo component

This project contains an `ExpandableDemo` component built using React, TypeScript, TailwindCSS. This component is a section that can be expanded or reduced with **animation** by the user.

## Features

- **Extendable**: The user can expand the section to display more content.
- **Retractable**: The user can collapse the section to hide content.
- **Animation**: The expansion and retraction of the section is animated for a better user experience.

Demo :
[expandable-section.vercel.app](https://expandable-section.vercel.app/)

## Technologies used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Usage

The `ExpandableDemo` component is located in the [src/components/ExpandableDemo.tsx](src/components/ExpandableDemo.tsx) file. You can use it in your React application just like any other React component.

```tsx
import ExpandableDemo from './components/ExpandableDemo';

function App() {
 return (
  <div>
   <ExpandableDemo />
  </div>
 );
}

export default App;
```

### Attributes

- `lineClamp`: Number of lines to display truncated text. Default: `2`

Accepts:

- Number: `1` to `6`
- String: `'none'`

#### Requirements

`tailwind.config.js` must include the following:

```js
extend: {
    keyframes: {
        "expandable-down": {
            from: { height: "var(--expandable-collapsed-height)" },
            to: { height: "var(--expandable-content-height)" },
        },
        "expandable-up": {
            from: { height: "var(--expandable-content-height)" },
            to: { height: "var(--expandable-collapsed-height)" },
        },
    },
    animation: {
        "expandable-down": "expandable-down 0.2s ease-out",
        "expandable-up": "expandable-up 0.2s ease-out",
    },
    safelist: [
        "line-clamp-1",
        "line-clamp-2",
        "line-clamp-3",
        "line-clamp-4",
        "line-clamp-5",
        "line-clamp-6",
        "line-clamp-none",
  ],
}
```

You need :

- `expandable.tsx` at [`src/components/ui/expandable.tsx`](src/components/ui/expandable.tsx)
- `button.tsx` at [`src/components/ui/button.tsx`](src/components/ui/button.tsx) from [shadcn/ui](https://ui.shadcn.com/docs/components/button)
- `TypographyP` component at [`src/components/ui/typographies.tsx`](src/components/ui/typographies.tsx) or replace it with a simple `<p>` *HTMLParagraphElement*
