"use client";
import React from "react";
import { toast } from "./dev-toast-v1";

const DevToastV1Usage = () => {
  return (
    <div className="flex items-center gap-4 flex-col md:flex-row *:p-2 *px-6 *:rounded-lg *:border-2 active:*:scale-95 *:transition-all">
      <button
        className="text-ACCENT bg-LIGHT dark:bg-DARK border-2  border-ACCENT/50 "
        onClick={() => toast("Default notification!")}
      >
        Default
      </button>
      <button
        className="text-green-500 bg-LIGHT dark:bg-DARK border-2  border-green-500/50"
        onClick={() => toast.success("Success! Action completed.")}
      >
        Success
      </button>
      <button
        className="text-red-500 bg-LIGHT dark:bg-DARK border-2  border-red-500/50"
        onClick={() => toast.error("Error! Something went wrong.")}
      >
        Error
      </button>
      <button
        className="text-yellow-500 bg-LIGHT dark:bg-DARK border-2  border-yellow-500/50"
        onClick={() => toast.warning("Warning! Check your input.")}
      >
        Warning
      </button>
      <button
        className="text-blue-500 bg-LIGHT dark:bg-DARK border-2  border-blue-500/50"
        onClick={() => toast.info("Info! Important information here.")}
      >
        Info
      </button>
    </div>
  );
};

export default DevToastV1Usage;
