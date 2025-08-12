"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

export const Portal = ({
  children,
  containerId = "modal-root",
}: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(containerId);
    if (el) {
      setContainer(el);
      setMounted(true);
    }
  }, [containerId]);

  return mounted && container ? createPortal(children, container) : null;
};
