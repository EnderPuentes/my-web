import { Refractor, registerLanguage } from 'react-refractor';

import bash from 'refractor/lang/bash';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import python from 'refractor/lang/python';
import tsx from 'refractor/lang/tsx';
import typescript from 'refractor/lang/typescript';

import 'prism-themes/themes/prism-dracula.css';

registerLanguage(bash);
registerLanguage(js);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(typescript);
registerLanguage(python);

type Props = {
  code: string;
  language: string;
};

export function CodeBlock({ code, language }: Props) {
  return (
    <div className="text-xs sm:text-base mb-5">
      <Refractor language={language} value={code} />
    </div>
  );
}
