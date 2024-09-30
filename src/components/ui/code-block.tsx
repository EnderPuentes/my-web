'use client';
import { CopyBlock, hybrid } from 'react-code-blocks';
import { CopyBlockProps } from 'react-code-blocks/dist/components/CopyBlock';

export function CodeBlock({ text, language }: CopyBlockProps) {
  return (
    <CopyBlock
      codeBlock
      showLineNumbers
      theme={hybrid}
      text={text}
      language={language}
    />
  );
}
