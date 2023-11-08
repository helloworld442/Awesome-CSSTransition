import React from "react";
import { useEffect, useState } from "react";

/**
 *
 * useCSSTRransition hook
 *
 * : the hook to used to transition
 *
 *
 * @param {number} timeout the Delay time to apply animation to CSSTransition component
 *
 * @returns {boolean} isActive the trigger to apply animation to CSSTransition component
 */

export default function useCSSTransition({
  timeout,
  trigger
}) {
  /**
   *  isActive state is used to transition trigger
   */
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    /**
     * Use a webapi called setTimeout
     *
     * to change the isActive state after a certain period of time.
     */
    const timeId = setTimeout(() => {
      setIsActive(true);
    }, timeout);

    /**
     * Use the Cleanup function
     *
     * to prevent memory leakage due to setTimeout.
     */
    return () => clearTimeout(timeId);
  }, [trigger]);
  return isActive;
}