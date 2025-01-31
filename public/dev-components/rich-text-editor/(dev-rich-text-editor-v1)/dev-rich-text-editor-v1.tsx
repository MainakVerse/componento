import React, { lazy, Suspense } from "react";
import { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

type EditorProps = ReactQuillProps;

const ReactQuill = lazy(() => import("react-quill"));

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    ["code-block", "formula"],
    [{ script: "sub" }, { script: "super" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["table"],
  ],
  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 1000,
    maxStack: 500,
    userOnly: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "formula",
  "script",
  "direction",
  "color",
  "background",
  "align",
  "clean",
  "table",
];

const DevRichTextEditorV1 = ({ ...props }: EditorProps) => {
  return (
    <div className="rich-text-editor">
      <Suspense
        fallback={
          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-xl"> Editor Loading</h2>{" "}
            <span className="h-5 w-5 block border-t-0 border-l-0 animate-spin rounded-full border-2 border-ACCENT"></span>{" "}
          </div>
        }
      >
        <ReactQuill
          className="text-black *:border-0 min-h-60 bg-LIGHT !rounded-lg overflow-hidden"
          modules={modules}
          formats={formats}
          theme="snow"
          {...props}
        />
      </Suspense>
    </div>
  );
};

export default DevRichTextEditorV1;
