"use client";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { FiInfo } from "react-icons/fi";
import { ImWarning } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

enum ToastType {
  DEFAULT = "default",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

interface ToastClass {
  className: string;
  icon: JSX.Element;
}

type ToastClassMap = {
  [key in ToastType]: ToastClass;
};

const TOAST_CLASSES: ToastClassMap = {
  [ToastType.DEFAULT]: {
    className:
      "bg-LIGHT dark:bg-DARK after:bg-ACCENT after:bg-ACCENT/70 border-ACCENT/50",
    icon: <></>,
  },
  [ToastType.SUCCESS]: {
    className:
      "bg-green-50 text-green-500 border-green-500/50 after:bg-green-500",
    icon: <IoCheckmarkCircleOutline />,
  },
  [ToastType.ERROR]: {
    className: "bg-red-50 text-red-500 border-red-500/50 after:bg-red-500",
    icon: <MdErrorOutline />,
  },
  [ToastType.WARNING]: {
    className:
      "bg-yellow-50 text-yellow-500 border-yellow-500/50 after:bg-yellow-500",
    icon: <ImWarning />,
  },
  [ToastType.INFO]: {
    className: "bg-blue-50 text-blue-500 border-blue-500/50 after:bg-blue-500",
    icon: <FiInfo />,
  },
};

const MAX_TOASTS = 10;
let toastContainer: HTMLDivElement | null = null;
let activeToasts: HTMLDivElement[] = [];

function createToastContainer(): HTMLDivElement {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className =
      "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

function removeToastContainer(): void {
  if (toastContainer && activeToasts.length === 0) {
    document.body.removeChild(toastContainer);
    toastContainer = null;
  }
}

function createToastElement(
  message: string,
  type: ToastType = ToastType.DEFAULT
): HTMLDivElement {
  const toast = document.createElement("div");
  const toastClass = TOAST_CLASSES[type];

  toast.innerHTML = `<div class="${toastClass.className} 
    p-3 pl-5 rounded-md shadow-lg border
    flex items-center justify-between
    after:content-[''] after:absolute after:inset-y-1 after:left-1 after:w-1 after:rounded-full
    transform transition-all duration-300 ease-in-out
    min-w-[300px] max-w-md toast-dir">
    <div class="flex items-center gap-2">${ReactDOMServer.renderToStaticMarkup(
      toastClass.icon
    )}<p>${message}</p></div>
    <button class="close-toast text-xl">${ReactDOMServer.renderToStaticMarkup(
      <IoIosClose />
    )}</button>
    </div>`;

  toast.querySelector(".close-toast")?.addEventListener("click", () => {
    removeToast(toast);
  });
  return toast;
}

function addToast(toast: HTMLDivElement): void {
  const container = createToastContainer();
  while (activeToasts.length >= MAX_TOASTS) {
    const oldestToast = activeToasts.shift();
    if (oldestToast) removeToast(oldestToast, false);
  }

  container.appendChild(toast);
  activeToasts.push(toast);

  requestAnimationFrame(() => {
    const toastDir = toast.querySelector(".toast-dir") as HTMLElement;
    if (toastDir) {
      toastDir.style.transform = "translateX(0)";
      toastDir.style.opacity = "1";
    }
  });
}

function removeToast(toast: HTMLDivElement, updateArray: boolean = true): void {
  if (!toast.parentElement) return;

  const toastDir = toast.querySelector(".toast-dir") as HTMLElement;
  if (toastDir) {
    toastDir.style.transform = "translateX(100%)";
    toastDir.style.opacity = "0";
  }

  setTimeout(() => {
    if (toast.parentElement === toastContainer) {
      toastContainer?.removeChild(toast);
      if (updateArray) {
        const index = activeToasts.indexOf(toast);
        if (index > -1) {
          activeToasts.splice(index, 1);
        }
      }
      if (activeToasts.length === 0) {
        removeToastContainer();
      }
    }
  }, 300);
}

function showToast(message: string, type: ToastType = ToastType.DEFAULT): void {
  const toast = createToastElement(message, type);
  const toastDir = toast.querySelector(".toast-dir") as HTMLElement;
  if (toastDir) {
    toastDir.style.transform = "translateX(100%)";
  }

  addToast(toast);

  setTimeout(() => {
    removeToast(toast);
  }, 3000);
}

interface ToastFunction {
  (message: string): void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
}

export const toast: ToastFunction = Object.assign(
  (message: string) => showToast(message, ToastType.DEFAULT),
  {
    success: (message: string) => showToast(message, ToastType.SUCCESS),
    error: (message: string) => showToast(message, ToastType.ERROR),
    warning: (message: string) => showToast(message, ToastType.WARNING),
    info: (message: string) => showToast(message, ToastType.INFO),
  }
);
