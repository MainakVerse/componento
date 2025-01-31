"use client";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import CopyCode from "./copy-code";
import CmpUrl from "@/utils/cmp-url";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import clsx from "clsx";
import useZustStore from "@/utils/zust-store";

type componentInfoProps = {
  component_code: {
    tsxCode: string;
    jsxCode: string;
  };
  component_preview: React.ReactNode;
  component_details: any;
  component_name: string;
  component_usage_code: string;
};

const ComponentInfo = ({
  component_code,
  component_preview,
  component_details,
  component_name,
  component_usage_code,
}: componentInfoProps) => {
  const [CurrTab, setCurrTab] = useState(0);
  const [copyCode, setCopyCode] = useState(false);
  const [copyNPM, setCopyNPM] = useState(false);
  const { ACCENT, DARK, LIGHT, AccentLabel, DarkLabel, LightLabel } =
    useZustStore();

  const [cmpCodes, setCmpCodes] = useState({
    jsxCode: changeColorNameToHex(component_code.jsxCode),
    tsxCode: changeColorNameToHex(component_code.tsxCode),
    usageCode: changeColorNameToHex(component_usage_code),
  });
  const [currVariant, setCurrVariant] = useState<string>(
    cmpCodes.tsxCode || cmpCodes.jsxCode
  );

  function changeColorNameToHex(component_code: string) {
    const updatedCodeString = component_code
      .replace(/DARK/g, DarkLabel)
      .replace(/LIGHT/g, LightLabel)
      .replace(/ACCENT/g, AccentLabel)
      .replace(/(\w+)V\d+/g, "$1")
      .replace(
        /process.env.NEXT_PUBLIC_BASE_URL as string/g,
        `"${process.env.NEXT_PUBLIC_BASE_URL as string}"`
      );

    return updatedCodeString;
  }

  useEffect(() => {
    const updatedCmpCodes = {
      jsxCode: changeColorNameToHex(`//JSX code \n${component_code.jsxCode}`),
      tsxCode: changeColorNameToHex(`//TSX code \n${component_code.tsxCode}`),
      usageCode: changeColorNameToHex(`//Usage code \n${component_usage_code}`),
    };
    setCmpCodes(updatedCmpCodes);

    // Update currVariant to match the current selection
    setCurrVariant(
      currVariant === cmpCodes.jsxCode
        ? updatedCmpCodes.jsxCode
        : updatedCmpCodes.tsxCode
    );
  }, [AccentLabel, DarkLabel, LightLabel]);

  const highlightCodeBlocks = (content: string) => {
    const highlightedCode = Prism.highlight(
      content,
      Prism.languages["javascript"],
      "javascript"
    );
    return `<pre class="text-sm"><code class="language-javascript">${highlightedCode}</code></pre>`;
  };

  return (
    <div className="w-full mt-5">
      <h3 className="font-semibold group flex items-center gap-4 opacity-80 text-xl">
        <span className="group-hover:text-accentNeon">#</span>
        {component_name}
        {component_details.doc_links &&
          component_details.doc_links.length > 0 &&
          component_details.doc_links.map((item: string, index: number) => (
            <Link
              target="_blank"
              key={index}
              href={item}
              className="p-1 gap-2 hover:opacity-80 text-xs flex items-center justify-center w-fit px-2 rounded-md border border-accentNeon bg-accentNeon/20 text-accentNeon"
            >
              Docs <GoLinkExternal />
            </Link>
          ))}
      </h3>

      <div
        id={CmpUrl(component_name)}
        style={{ maxHeight: CurrTab == 0 ? "auto" : "400px" }}
        className="w-full mt-2 pt-0 overflow-hidden min-h-56 border-2 border-accentNeon/50 rounded-lg relative flex flex-col"
      >
        <ul className="w-full bg-rtlLight dark:bg-rtlDark relative p-3 pb-0 flex items-center gap-5 text-sm flex-shrink-0 ">
          {["Preview", "Code", "Usage", "Details"].map((item, index) => (
            <li
              key={index}
              onClick={() => setCurrTab(index)}
              className={`hover:text-accentNeon select-none cursor-pointer border-transparent border-b-2 hover:border-accentNeon ${
                CurrTab === index && "border-accentNeon text-accentNeon"
              }`}
            >
              {item}
            </li>
          ))}
          <li key={"copy-code"}>
            <CopyCode
              textToCopy={CurrTab == 2 ? cmpCodes.usageCode || "" : currVariant}
              setCopied={setCopyCode}
            >
              <button className="bg-rtlLight dark:bg-rtlDark text-accentNeon border border-accentNeon absolute  select-none top-0 right-0 rounded-bl-lg border-t-0 border-r-0 p-1 px-3 text-sm font-semibold cursor-pointer hover:!bg-accentNeon/30">
                {copyCode ? "Copied!" : "Copy"}
              </button>
            </CopyCode>
          </li>
          <li key={"bottom-line"}>
            <hr className="transform absolute border-0 inset-x-0 h-[2px] bottom-0 bg-gradient-to-r from-accentNeon/50 to-transparent" />
          </li>
        </ul>
        {CurrTab === 1 && (
          <div className="absolute bottom-4 right-4 bg-accentNeon/20 text-accentNeon border border-accentNeon  select-none  rounded-lg *:p-0.5 *:px-2 overflow-hidden text-sm font-semibold">
            <button
              className={`${
                currVariant === cmpCodes.jsxCode &&
                "bg-accentNeon/50 text-white"
              }`}
              onClick={() => setCurrVariant(() => cmpCodes.jsxCode)}
            >
              JSX
            </button>
            <button
              className={`${
                currVariant === cmpCodes.tsxCode &&
                "bg-accentNeon/50 text-white"
              }`}
              onClick={() => setCurrVariant(() => cmpCodes.tsxCode)}
            >
              TSX
            </button>
          </div>
        )}
        <div
          className={clsx(
            "flex-grow overflow-auto *:p-5",
            (CurrTab === 1 || CurrTab === 2) && "bg-[#0F172A]"
          )}
        >
          {CurrTab == 0 ? (
            <div className="min-h-48 w-full rounded-xl flex items-center justify-center">
              {component_preview}
            </div>
          ) : CurrTab == 1 ? (
            <div
              dangerouslySetInnerHTML={{
                __html: highlightCodeBlocks(currVariant || ""),
              }}
            />
          ) : CurrTab == 2 ? (
            <div
              dangerouslySetInnerHTML={{
                __html: highlightCodeBlocks(cmpCodes.usageCode || ""),
              }}
            />
          ) : (
            <div className="flex-1 w-full p-4 overflow-y-scroll space-y-4">
              <h2 className="text-accentNeon bg-accentNeon/20 px-2 text-sm rounded-lg w-fit">
                {component_details.description}
              </h2>

              <h3 className="font-semibold text-accentNeon/80">
                Packages:{" "}
                {component_details.packages &&
                  component_details.packages.length}
              </h3>

              {component_details.packages &&
                component_details.packages.length > 0 && (
                  <code className="text-sm bg-accentNeon/20 text-accentNeon w-fit p-1 border border-accentNeon px-2 rounded-lg">
                    npm i
                    {component_details.packages.map(
                      (item: any, index: number) => (
                        <React.Fragment key={index}>
                          {" "}
                          <Link
                            target="_blank"
                            className="hover:underline cursor-pointer"
                            href={item.pckg_link}
                          >
                            {item.pckg_name}
                          </Link>
                        </React.Fragment>
                      )
                    )}
                    <CopyCode
                      textToCopy={
                        "npm i " +
                        component_details.packages
                          .map((item: any) => item.pckg_name + " ")
                          .join("")
                      }
                      setCopied={setCopyNPM}
                    >
                      <button className="bg-secondary/20 text-accentNeon rounded-md p-1 aspect-square translate-y-[2px]">
                        {copyNPM ? <FaCheck /> : <IoCopy />}
                      </button>
                    </CopyCode>
                  </code>
                )}

              {component_details.helpers &&
                component_details.helpers.length > 0 && (
                  <>
                    <h3 className="font-semibold text-accentNeon/80">
                      Helper Components:
                    </h3>
                    <code className="text-sm bg-accentNeon/20 text-accentNeon w-fit p-1 border border-accentNeon px-2 rounded-lg">
                      {component_details.helpers.map(
                        (item: any, index: number) => (
                          <React.Fragment key={index}>
                            {" "}
                            <Link
                              target="_blank"
                              className="hover:underline cursor-pointer"
                              href={`${process.env.NEXT_PUBLIC_BASE_URL}/components/${item.cmp_link}`}
                            >
                              {item.cmp_name}
                            </Link>
                          </React.Fragment>
                        )
                      )}
                    </code>
                  </>
                )}

              <h3 className="font-semibold text-accentNeon/80">Features</h3>
              <ul className="text-sm font-light list-disc list-inside list-accentNeon marker:text-accentNeon">
                {component_details.features.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>

              <h3 className="font-semibold text-accentNeon/80 flex  gap-3 items-center">
                Props{" "}
                <p className="text-xs font-light">
                  ( Additional props can be included as needed )
                </p>
              </h3>
              <ul className="text-sm font-light list-disc list-inside list-accentNeon marker:text-accentNeon">
                {component_details.props.map((item: any, index: number) => (
                  <li key={index}>
                    {" "}
                    <code className="bg-accentNeon/20 text-accentNeon px-2 rounded-sm">{`${item.propName}={ ${item.propExample} }`}</code>{" "}
                    {` // ${item.propDetail}`}{" "}
                  </li>
                ))}
              </ul>
              {component_details.doc_links &&
                component_details.doc_links.length > 0 &&
                component_details.doc_links.map(
                  (item: string, index: number) => (
                    <Link
                      target="_blank"
                      href={item}
                      key={index}
                      className="p-1 gap-2 hover:opacity-80 flex items-center justify-center w-fit px-2 rounded-md border border-accentNeon bg-accentNeon/20 text-accentNeon text-sm"
                    >
                      Docs <GoLinkExternal />
                    </Link>
                  )
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentInfo;
