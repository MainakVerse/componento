"use client";
import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // basic style and animations
import "react-resizable/css/styles.css"; // Resizable CSS

const ResponsiveGridLayout = () => {
  const initialLayout = [
    { w: 2, h: 2, x: 0, y: 0, i: "1" },
    { w: 2, h: 3, x: 2, y: 0, i: "2" },
    { w: 2, h: 4, x: 4, y: 0, i: "3" },
    { w: 2, h: 3, x: 0, y: 2, i: "4" },
    { w: 2, h: 2, x: 2, y: 3, i: "5" },
    { w: 2, h: 3, x: 4, y: 4, i: "6" },
    { w: 2, h: 4, x: 0, y: 5, i: "7" },
    { w: 2, h: 2, x: 2, y: 5, i: "8" },
    { w: 2, h: 3, x: 4, y: 7, i: "9" },
    { w: 2, h: 2, x: 2, y: 7, i: "10" },
  ];

  const [layout, setLayout] = useState(initialLayout);

  const layoutChange = (newLayout) => {
    console.log(newLayout);
    setLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      onLayoutChange={layoutChange}
      isDroppable={true}
      cols={12}
      rowHeight={20}
      width={1200}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          className="bg-LIGHT grid place-content-center hover:bg-ACCENT hover:dark:bg-ACCENT cursor-move dark:bg-DARK border border-ACCENT/50 rounded-md"
        >
          {item.i}
        </div>
      ))}
    </GridLayout>
  );
};

export default ResponsiveGridLayout;
