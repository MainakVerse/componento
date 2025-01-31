"use client";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { FiInfo } from "react-icons/fi";
import { ImWarning } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

const TOAST_TYPES = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

const TOAST_CLASSES = {
  [TOAST_TYPES.DEFAULT]: {
    className:
      "bg-LIGHT dark:bg-DARK after:bg-ACCENT after:bg-ACCENT/70 border-ACCENT/50",
    icon: <></>,
  },
  [TOAST_TYPES.SUCCESS]: {
    className:
      "bg-green-50 text-green-500 border-green-500/50 after:bg-green-500",
    icon: <IoCheckmarkCircleOutline />,
  },
  [TOAST_TYPES.ERROR]: {
    className: "bg-red-50 text-red-500 border-red-500/50 after:bg-red-500",
    icon: <MdErrorOutline />,
  },
  [TOAST_TYPES.WARNING]: {
    className:
      "bg-yellow-50 text-yellow-500 border-yellow-500/50 after:bg-yellow-500",
    icon: <ImWarning />,
  },
  [TOAST_TYPES.INFO]: {
    className: "bg-blue-50 text-blue-500 border-blue-500/50 after:bg-blue-500",
    icon: <FiInfo />,
  },
};

const MAX_TOASTS = 10;
let toastContainer = null;
let activeToasts = [];

function createToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className =
      "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

function removeToastContainer() {
  if (toastContainer && activeToasts.length === 0) {
    document.body.removeChild(toastContainer);
    toastContainer = null;
  }
}

function createToastElement(message, type = TOAST_TYPES.DEFAULT) {
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

function addToast(toast) {
  const container = createToastContainer();
  while (activeToasts.length >= MAX_TOASTS) {
    const oldestToast = activeToasts.shift();
    if (oldestToast) removeToast(oldestToast, false);
  }

  container.appendChild(toast);
  activeToasts.push(toast);

  requestAnimationFrame(() => {
    const toastDir = toast.querySelector(".toast-dir");
    if (toastDir) {
      toastDir.style.transform = "translateX(0)";
      toastDir.style.opacity = "1";
    }
  });
}

function removeToast(toast, updateArray = true) {
  if (!toast.parentElement) return;

  const toastDir = toast.querySelector(".toast-dir");
  if (toastDir) {
    toastDir.style.transform = "translateX(100%)";
    toastDir.style.opacity = "0";
  }

  setTimeout(() => {
    if (toast.parentElement === toastContainer) {
      toastContainer.removeChild(toast);
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

function showToast(message, type = TOAST_TYPES.DEFAULT) {
  const toast = createToastElement(message, type);
  const toastDir = toast.querySelector(".toast-dir");
  if (toastDir) {
    toastDir.style.transform = "translateX(100%)";
  }

  addToast(toast);

  setTimeout(() => {
    removeToast(toast);
  }, 5000);
}

export const toast = Object.assign(
  (message) => showToast(message, TOAST_TYPES.DEFAULT),
  {
    success: (message) => showToast(message, TOAST_TYPES.SUCCESS),
    error: (message) => showToast(message, TOAST_TYPES.ERROR),
    warning: (message) => showToast(message, TOAST_TYPES.WARNING),
    info: (message) => showToast(message, TOAST_TYPES.INFO),
  }
);
