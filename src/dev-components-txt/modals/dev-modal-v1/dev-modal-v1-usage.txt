import React from "react";
import DevModalV1, { ModalTrigger } from "./dev-modal-v1";

const DevModalV1Usage = () => {
  return (
    <DevModalV1
      title="Dev Modal"
      defaultOpen={false}
      modalBtn={
        <button className="bg-ACCENT p-2 px-4 rounded-md hover:opacity-80">
          Open Modal
        </button>
      }
    >
      <div className="flex max-w-md flex-col gap-3 w-full p-3 pt-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum
          magni quia enim, vel autem maiores. Beatae eveniet omnis nam non ab,
          quo suscipit repellat ratione enim delectus pariatur quos.
        </p>

        <ModalTrigger>
          <button className="bg-ACCENT p-1.5 rounded-lg hover:opacity-80">
            Close
          </button>
        </ModalTrigger>
      </div>
    </DevModalV1>
  );
};

export default DevModalV1Usage;
