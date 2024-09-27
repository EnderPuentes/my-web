'use client';

import { CopyBlock, hybrid } from 'react-code-blocks';
import { CopyBlockProps } from 'react-code-blocks/dist/components/CopyBlock';

export function CodeBlock(props: CopyBlockProps) {
  return <CopyBlock theme={hybrid} codeBlock {...props} />;
}
