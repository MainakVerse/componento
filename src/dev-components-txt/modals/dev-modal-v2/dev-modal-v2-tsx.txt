"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
/*//  dev-Modal css animation 
.Modal-Overlay {
  animation: modal-overlayShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.Modal-Content {
  animation: modal-contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes modal-contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}*/
type ModalProps = {
  title?: string;
  children: React.ReactNode;
  modalBtn: React.ReactNode;
  closeIcon?: boolean;
};
export type ModalRef = {
  setModal: (newState: boolean) => void;
};

const DevModalV2 = forwardRef<ModalRef, ModalProps>(
  ({ title, children, modalBtn, closeIcon = true }, ref) => {
    const [open, setOpen] = useState(false);

    // This will help to set the state of the modal from parent component
    useImperativeHandle(ref, () => ({
      setModal: (newState) => {
        setOpen(newState);
      },
    }));

    return (
      <>
        <div onClick={() => setOpen(true)}>{modalBtn}</div>
        {open &&
          createPortal(
            <>
              <section className="Modal-Overlay inset-0 fixed bg-black/50 z-50" />
              <div className="Modal-Content md:w-full w-[95%]  fixed z-50 top-[50%] left-[50%] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-xl bg-LIGHT dark:bg-DARK border border-ACCENT/30 *:p-3">
                {(closeIcon || title) && (
                  <div className="flex items-start justify-end w-full !pb-0">
                    {title && (
                      <h3 className="flex-grow font-semibold text-ACCENT text-lg">
                        {title}
                      </h3>
                    )}
                    <button
                      className="cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      🗙
                    </button>
                  </div>
                )}
                {children}
              </div>
            </>,
            document.body
          )}
      </>
    );
  }
);

export default DevModalV2;
