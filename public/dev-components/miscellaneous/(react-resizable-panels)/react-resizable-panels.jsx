"use client";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const ReactResizablePanels = () => {
  return (
    <PanelGroup direction="horizontal" className="w-full transition-all h-full">
      <Panel
        defaultSize={30}
        minSize={10}
        className="grid place-items-center bg-LIGHT dark:bg-DARK rounded-md"
      >
        left
      </Panel>

      <PanelResizeHandle className="w-2 hover:bg-ACCENT/50 h-full rounded-md  active:bg-ACCENT" />
      <Panel defaultSize={30} minSize={10}>
        <PanelGroup direction="vertical" className="w-[90vw]">
          <Panel
            defaultSize={30}
            minSize={10}
            className="grid place-items-center bg-LIGHT dark:bg-DARK rounded-md"
          >
            top
          </Panel>
          <PanelResizeHandle className="w-full h-2 rounded-md hover:bg-ACCENT/50  active:bg-ACCENT" />
          <Panel
            defaultSize={30}
            minSize={10}
            className="grid place-items-center bg-LIGHT dark:bg-DARK rounded-md"
          >
            bottom
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
};

export default ReactResizablePanels;
