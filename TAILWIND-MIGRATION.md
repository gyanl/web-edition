# Tailwind Migration Guide

This document explains how the SCC Online Web Edition prototype has been structured to facilitate migration to Tailwind CSS.

## Overview

The current implementation uses a **Tailwind-style architecture** with:
- CSS custom properties following Tailwind naming conventions
- Utility classes that mirror Tailwind's API
- Responsive breakpoints matching Tailwind's defaults
- A design token system compatible with Tailwind configuration

## CSS Variables → Tailwind Config

All CSS variables have been renamed to match Tailwind conventions:

### Colors
```css
/* Old */                    /* New (Tailwind-style) */
--text-primary          →    --gray-900
--text-secondary        →    --gray-600
--text-tertiary         →    --gray-500
--accent-primary        →    --rose-700
--bg-secondary          →    --gray-50
```

### Spacing
```css
/* Old */                    /* New (Tailwind-style) */
--spacing-xs            →    --space-1   (4px)
--spacing-sm            →    --space-2   (8px)
--spacing-md            →    --space-4   (16px)
--spacing-lg            →    --space-6   (24px)
--spacing-xl            →    --space-8   (32px)
--spacing-5xl           →    --space-30  (120px)
```

### Typography
```css
/* Old */                    /* New (Tailwind-style) */
--font-heading          →    --font-serif
--font-body             →    --font-sans
--font-size-lg          →    --text-base
--font-size-2xl         →    --text-xl
```

### Border Radius
```css
/* Old */                    /* New (Tailwind-style) */
--radius-sm             →    --rounded-sm
--radius-md             →    --rounded
--radius-lg             →    --rounded-lg
```

## Utility Classes Available

The CSS now includes Tailwind-style utility classes:

### Layout
- `.flex`, `.flex-col`, `.flex-row`
- `.flex-1`
- `.gap-2`, `.gap-6`, `.gap-8`
- `.grid`, `.grid-cols-2`, `.grid-cols-3`
- `.items-stretch`
- `.order-1`, `.order-2`

### Spacing
- `.p-4`, `.p-6`, `.px-6`, `.py-4`
- `.mb-0`, `.mb-1`, `.mb-6`, `.mb-16`
- `.mt-8`, `.mt-16`
- `.pt-1`

### Sizing
- `.w-5`, `.h-5`
- `.w-[600px]`
- `.min-h-0`
- `.max-w-6xl`, `.max-w-[680px]`

### Colors
- `.text-gray-900`, `.text-gray-600`, `.text-gray-500`
- `.text-rose-700`
- `.bg-white`, `.bg-gray-50`

### Typography
- `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`
- `.font-medium`, `.font-semibold`, `.font-bold`

### Effects
- `.rounded`, `.rounded-sm`, `.rounded-lg`, `.rounded-xl`
- `.opacity-0`, `.opacity-100`
- `.rotate-180`
- `.shadow-inner-strong`

### Transitions
- `.transition-all`
- `.duration-200`, `.duration-300`

### Interactivity
- `.cursor-pointer`

## Component Classes

Some semantic component classes remain for complex patterns that would be unwieldy with pure utilities:

- `.button`, `.button-primary`, `.button-secondary`, `.button-ghost`
- `.header`, `.nav-container`, `.nav-link`
- `.hero`, `.hero-content`, `.hero-buttons`
- `.dashboard-section`, `.dashboard-grid`, `.dashboard-features`
- `.feature-item`, `.feature-item.active`
- `.accordion-item`, `.accordion-header`, `.accordion-content`
- `.pricing-card`, `.pricing-grid`

## Responsive Breakpoints

The breakpoints now match Tailwind's defaults:

```css
/* Tailwind breakpoints */
sm:  640px
md:  768px   /* Mobile styles below this */
lg:  1024px  /* Tablet styles below this */
xl:  1280px
```

Current implementation:
- `@media (max-width: 767px)` → Mobile
- `@media (max-width: 1023px)` → Tablet

## Tailwind Configuration

A reference `tailwind.config.reference.js` file is provided with the exact configuration needed to match the design system.

### Key Configuration:

```js
theme: {
  extend: {
    colors: {
      gray: { 50, 100, 200, 300, 500, 600, 900 },
      rose: { 700 },
      red: { 300, 600 }
    },
    spacing: { 1: '4px', 2: '8px', 4: '16px', ... },
    borderRadius: { sm: '6px', DEFAULT: '8px', lg: '12px', xl: '16px' }
  }
}
```

## Migration Path for Developers

### 1. Install Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Copy Configuration
Replace `tailwind.config.js` with settings from `tailwind.config.reference.js`

### 3. Update CSS Structure
- Keep custom component classes for complex patterns
- Replace CSS variables with Tailwind theme values
- Use `@apply` for component styles

### 4. Gradual HTML Conversion
Start replacing semantic classes with utility classes:

```html
<!-- Before -->
<div class="pricing-card">
  <div class="pricing-header">
    ...
  </div>
</div>

<!-- After (Tailwind utilities) -->
<div class="bg-white rounded-lg p-8 shadow-md transition-transform hover:-translate-y-1">
  <div class="mb-6">
    ...
  </div>
</div>
```

### 5. Complex Components
For complex components like buttons and accordions, use `@apply`:

```css
.btn-primary {
  @apply inline-flex justify-center px-5 py-2.5 rounded-sm;
  @apply font-sans font-medium text-base;
  @apply bg-rose-700 text-white;
  @apply transition-transform duration-200;
  @apply hover:-translate-y-0.5 active:translate-y-0.5;
}
```

## Design Token Reference

All design tokens are documented in the CSS `:root` section and the Tailwind config reference file. The visual design remains **exactly the same** - only the implementation approach has changed to align with Tailwind conventions.

## Benefits

1. **Familiar API**: Developers familiar with Tailwind will recognize the naming patterns
2. **Direct Translation**: CSS variables map 1:1 to Tailwind theme values
3. **Progressive Enhancement**: Can migrate component-by-component
4. **Type Safety**: When using TypeScript, Tailwind provides autocomplete
5. **Production Ready**: Tailwind's purge/JIT will eliminate unused styles

## Questions?

Refer to:
- `tailwind.config.reference.js` - Complete Tailwind configuration
- `styles.css` - Current implementation with Tailwind-style utilities
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Official guide
