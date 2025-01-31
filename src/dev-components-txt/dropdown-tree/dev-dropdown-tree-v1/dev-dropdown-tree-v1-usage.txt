"use client";
import React from "react";
import { LuFolderOpen, LuFolder, LuFile } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import DevDropdownTreeV1 from "./dev-dropdown-tree-v1";

export default function DevDropdownTreeV1Usage() {
  const folderStructure = [
    {
      id: "src",
      label: "source-folder",
      children: [
        {
          id: "components",
          label: "components",
          children: [
            {
              id: "header-tsx",
              label: "header.tsx",
              icon: <FaReact />,
            },
            {
              id: "footer-tsx",
              label: "footer.tsx",
              icon: <FaReact />,
            },
            {
              id: "button-tsx",
              label: "button.tsx",
              icon: <FaReact />,
            },
          ],
        },
        {
          id: "pages",
          label: "pages",
          children: [
            {
              id: "home",
              label: "home",
              children: [
                {
                  id: "home-component-tsx",
                  label: "home.tsx",
                },
                {
                  id: "home-style-css",
                  label: "home.module.css",
                },
              ],
            },
            {
              id: "about",
              label: "about",
              children: [
                {
                  id: "about-component-tsx",
                  label: "about.tsx",
                },
                {
                  id: "about-style-css",
                  label: "about.module.css",
                },
              ],
            },
          ],
        },
        {
          id: "assets",
          label: "assets",
          children: [
            {
              id: "logo-png",
              label: "logo.png",
            },
            {
              id: "styles-css",
              label: "styles.css",
            },
          ],
        },
        {
          id: "app-tsx",
          label: "app.tsx",
        },
        {
          id: "index-tsx",
          label: "index.tsx",
        },
      ],
    },
  ];

  return (
    <>
      <DevDropdownTreeV1
        data={folderStructure}
        iconOnOpen={<LuFolderOpen />}
        iconOnClose={<LuFolder />}
        childrenIcon={<LuFile />}
        initialExpandedNodes={["src"]}
        onChange={(nodes) => console.log(nodes)}
      />
    </>
  );
}
