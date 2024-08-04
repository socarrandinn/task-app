import CodeMirror from '@uiw/react-codemirror';
import { Controller, useForm } from 'react-hook-form';
import { EditorView } from '@codemirror/view';
import { html } from '@codemirror/lang-html';
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { tags } from "@lezer/highlight"

const myHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: "#fc6" },
  { tag: tags.comment, color: "#f5d", fontStyle: "italic" },
  { tag: tags.attributeValue, color: "#34343", fontStyle: "italic" },
])

// Define el tema de CodeMirror
const myTheme = EditorView.theme({
  "&": {
    color: "#000",
    backgroundColor: "transparent"
  },
  ".cm-content": {
    caretColor: "#000"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#000"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#000"
  },
  ".cm-gutters": {
    backgroundColor: "transparent",
    display: 'none',
    border: "none"
  },
}, { dark: false });


const Editor = () => {
  const { control } = useForm();

  return (
    <div className='w-full'>
      <Controller
        name='content'
        control={control}
        render={({ field }) => {
          return (
            <CodeMirror
              value={field.value}
              minHeight='60px'
              defaultValue={''}
              maxWidth='auto'
              theme={myTheme}
              extensions={[html(), EditorView.lineWrapping, syntaxHighlighting(myHighlightStyle)]}
              onChange={(value) => field.onChange(value)}
              className="editor" // Aplica una clase personalizada
            />
          );
        }}
      />
    </div>
  );
};

export default Editor;
