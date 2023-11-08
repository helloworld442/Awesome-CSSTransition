import React from "react";
import useCSSTransition from "../hooks/useCSSTransition";

/**
 *
 * CSSTransition component
 *
 * : the CSSTransition Animation component
 *
 * is used to transition from one animation to another animation
 *
 *
 * @param {boolean} trigger the trigger to be executed immediately
 *
 * @param {string} className the Identifier to identify CSSTransition component
 *
 * @param {number} timeout  the Delay time to apply animation to CSSTransition component
 *
 */

export default function AwesomeCSSTransition({
  trigger,
  className,
  timeout,
  children
}) {
  const isActive = useCSSTransition({
    timeout,
    trigger
  });
  return /*#__PURE__*/React.createElement("div", {
    className: isActive ? className + "__abled" : className + "__disabled"
  }, children);
}