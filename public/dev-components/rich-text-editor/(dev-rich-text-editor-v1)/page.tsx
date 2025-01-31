'use client'
import React, { useState } from "react";
import DevRichTextEditorV1 from "./dev-rich-text-editor-v1";

const DevRichTextEditorV1Usage = () => {
  const [content, setContent] = useState(`<div><h1><strong>This is Dev-Components using</strong> (<strong>Quill Editor</strong>)</h1><p><span style="color: rgb(194, 133, 255);">preview-link</span>: <a href="dev-components.com " rel="noopener noreferrer" target="_blank">${process.env.NEXT_PUBLIC_BASE_URL}</a></p><p><br></p><pre>import React, { useState } from 'react';
    import ReactQuill from 'react-quill';
    import 'react-quill/dist/quill.snow.css';
    
    function MyComponent() {
      const [value, setValue] = useState('');
    
      return &lt;ReactQuill theme="snow" value={value} onChange={setValue} /&gt;;
    }
    </pre><p><br></p></div>`);

  return (
    <DevRichTextEditorV1
      defaultValue={content}
      onChange={(value) => setContent(value)}
    />
  );
};

export default DevRichTextEditorV1Usage;