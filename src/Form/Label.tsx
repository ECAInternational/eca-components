import React, { LabelHTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';

export function Label({ className, children, htmlFor, ...props }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!htmlFor) return;
    const observer = new MutationObserver(() => {
      const targetElement = htmlFor && (document.getElementById(htmlFor) as HTMLInputElement);
      if (targetElement) {
        setDisabled(targetElement.disabled);
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  }, [htmlFor]);

  const text = disabled ? 'text-controls-content-disabled' : 'text-neutral-body';
  return (
    <label className={`block py-1 ${text} transition-all label-sm-mid ${className}`} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
