import { Fragment, useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import DOMPurify from "dompurify";
import { Converter } from "@/service/converter";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function Create() {
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
  const [value, setValue] = useState(mkdStr);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html: any = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);
  function createMarkup(html: any) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }
  // console.log(convertedContent);
  console.log(Converter(convertedContent));

  return (
    <>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      <MDEditor height={200} value={value} />
    </>
  );
}
