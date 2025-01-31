"use client";
import React from "react";
import DevModalV2, { ModalRef } from "./dev-modal-v2";

const DevModalV2Usage = () => {
  const closeRef = React.useRef<ModalRef>(null); //optional
  const handleClose = () => closeRef.current?.setModal(false); //optional
  return (
    <DevModalV2
      ref={closeRef} //optional
      title="Dev Modal"
      modalBtn={
        <button className="bg-ACCENT p-2 px-4 rounded-md hover:opacity-80">
          Open Modal
        </button>
      }
    >
      <div className="flex flex-col gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum
          magni quia enim, vel autem maiores. Beatae eveniet omnis nam non ab,
          quo suscipit repellat ratione enim delectus pariatur quos.
        </p>
        <button
          onClick={handleClose}
          className="bg-ACCENT p-1 px-4 rounded-xl hover:opacity-80"
        >
          Close
        </button>
      </div>
    </DevModalV2>
  );
};

export default DevModalV2Usage;
