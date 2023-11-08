# Awesome CSSTranstion

Introducing Awesome CSSTranstion: Awesome CSSTranstion component with low user learning curves opens a new era of css transition in react applications.

_Features:_

🌟 Awesome Features: Say goodbye to CSSTransition components that are difficult to use and need to be pre-prepared. Awesome CSSTransition is an easy-to-use, non-preparation transition component. It's easy enough to make you laugh when using it.

## 🚀 Getting Started

### 1. Install

You can install package by the conmand below.

```bash
npm install @minseung557/awesome-css-transition
```

You can also use other package managers such as yarn, pnpm

### 2. Use AwesomeCSSTransition by parent components

`AwesomeCSSTransition` is the parent component that surrounds the child.

`AwesomeCSSTransition` must have children

`AwesomeCSSTransition` have three props

1.  `trigger` : the trigger to be executed immediately
2.  `className` : the Identifier to identify CSSTransition component
3.  `timeout` : the Delay time to apply animation to CSSTransition component

Then the CSSTransition component will act as an animation Transition.

```javascript
import { AwesomeCSSTransition } from "@minseung557/awesome-css-transition";

const App = () => {
  return (
    <AwesomeCSSTransition>
      //AwesomeCSSTransition must have children
      {children}
    </AwesomeCSSTransition>
  );
};
```

### 3. Use useCSSTransition hook to transition components

You can also use `useCSSTransition` to transition any component

But you have to hand over the factor value to `useCSSTransition`.

```javascript
import { useCSSTrasition } from "@minseung557/awesome-css-transition";

const About = () => {
  const isActive = useCSSTransition({ timout: 500, trigger: true });

  return (
    <div className={isActive ? "test__abled" : "test__disabled"}>
      {children}
    </div>
  );
};
```
