import { useRef } from "react";

export function useControllableProp(prop, state) {
  const { current: isControlled } = useRef(prop !== undefined);
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}
