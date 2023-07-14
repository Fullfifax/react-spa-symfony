import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const BasicCrud = () => {
    const codeSnippetEntityCommandCreation = `php bin/console make:entity`;
    const codeSnippetMigration = `php bin/console make:migration`;

    return <>
        <p>Create an user entity and put name, firstname, age, cin, adress as properties</p>
        <CodeBlock code={codeSnippetEntityCommandCreation} />
        <br/>
        <p>Once you are done with user entity creation, make migration</p>
        <CodeBlock code={codeSnippetMigration} />
    </>
};

export default BasicCrud;