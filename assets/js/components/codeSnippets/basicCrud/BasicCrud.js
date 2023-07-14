import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const BasicCrud = () => {
    const codeSnippetEntityCommandCreation = `php bin/console make:entity`;
    const codeSnippetMakeMigration = `php bin/console make:migration`;
    const codeSnippetMigrate = `php bin/console doctrine:migrations:migrate`;

    return <>
        <p>Create an user entity and put name, firstname, age, cin, adress as properties</p>
        <CodeBlock code={codeSnippetEntityCommandCreation} />
        <br/>
        <p>Once you are done with user entity creation, make migration</p>
        <CodeBlock code={codeSnippetMakeMigration} />
        <br/>
        <p>After a migration file created (which contains SQL). We will then run the SQL using this command</p>
        <CodeBlock code={codeSnippetMigrate} />
    </>
};

export default BasicCrud;