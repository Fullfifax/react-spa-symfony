import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const InstallSymfony = () => {
  const codeSnippet = `symfony new --webapp your_app_name --version=lts`;

  return <CodeBlock code={codeSnippet} />;
};

export default InstallSymfony;