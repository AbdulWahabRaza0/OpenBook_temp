import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import { MarkdownPreviewProps } from "@uiw/react-markdown-preview";
import dynamic from "next/dynamic";
const MarkdownPreview = dynamic<MarkdownPreviewProps>(
  () => import("@uiw/react-markdown-preview"),
  {
    ssr: false,
  }
);

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

export default function Test() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container">
      <h3>Auto</h3>
      <MDEditor height={200} value={value} />
      <h3>Light</h3>
      <div data-color-mode="light">
        <MDEditor height={200} value={value} />
      </div>
      <h3>Light</h3>
      <div data-color-mode="dark">
        <MDEditor height={200} value={value} />
      </div>
      <MarkdownPreview source={"Some **markdown** text"} />
    </div>
  );
}
