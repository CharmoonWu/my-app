import { useState, useCallback } from "react";
import { useControllableProp } from "./useControllable";

export function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
  } = props;

  const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);

  const onClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenProp?.();
  }, [isControlled, onOpenProp]);

  const onToggle = useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
