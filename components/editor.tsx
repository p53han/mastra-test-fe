'use client';
import * as React from 'react';
import { Plate, usePlateEditor } from 'platejs/react';
import { EditorKit } from '@/components/editor/editor-kit';
import { Editor, EditorContainer } from '@/components/ui/editor';
// import { DEMO_VALUES } from '@/components/editor/values/demo-values';


export default function MyEditor({ id }: { id: string }) {
  const editor = usePlateEditor({
    plugins: EditorKit,
    // value: DEMO_VALUES[id],
  });
  return (
    <Plate editor={editor}>
      <EditorContainer variant="demo">
        <Editor />
      </EditorContainer>
    </Plate>
  );
}