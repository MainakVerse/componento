import React from "react";
import DevDrawerV2 from "./dev-drawer-v2";

const DevDrawerV2Usage = () => {
  return (
    <div className="flex items-center justify-center gap-3 p-5 flex-col md:flex-row bg-LIGHT dark:bg-DARK rounded-xl">
      <DevDrawerV2
        title="Drawer Title"
        openBtn={
          <button className="bg-ACCENT p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-ACCENT/50">
            Open Bottom
          </button>
        }
        position="bottom"
      >
        <div className="text-center p-3">
          <h2>Drawer Content</h2>
        </div>
      </DevDrawerV2>

      <DevDrawerV2
        title="Drawer Title"
        openBtn={
          <button className="bg-ACCENT p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-ACCENT/50">
            Open Right
          </button>
        }
        position="right"
      >
        <div className="text-center p-3">
          <h2>Drawer Content</h2>
        </div>
      </DevDrawerV2>

      <DevDrawerV2
        title="Drawer Title"
        openBtn={
          <button className="bg-ACCENT p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-ACCENT/50">
            Open Left
          </button>
        }
        position="left"
      >
        <div className="text-center p-3">
          <h2>Drawer Content</h2>
        </div>
      </DevDrawerV2>

      <DevDrawerV2
        title="Drawer Title"
        openBtn={
          <button className="bg-ACCENT p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-ACCENT/50">
            Open Top
          </button>
        }
        position="top"
      >
        <div className="text-center p-3">
          <h2>Drawer Content</h2>
        </div>
      </DevDrawerV2>
    </div>
  );
};

export default DevDrawerV2Usage;
