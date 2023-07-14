import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const BasicCrud = () => {
    const codeSnippetEntityCommandCreation = `php bin/console make:entity`;
    const codeSnippetMakeMigration = `php bin/console make:migration`;
    const codeSnippetMigrate = `php bin/console doctrine:migrations:migrate`;

    return <>
        <CodeBlock code={codeSnippetEntityCommandCreation} paragraph={"Create an user entity and put name, firstname, age, cin, adress as properties"} />
        <CodeBlock code={codeSnippetMakeMigration} paragraph={"Once you are done with user entity creation, make migration"} />
        <CodeBlock code={codeSnippetMigrate} paragraph={"After a migration file created (which contains SQL). We will then run the SQL using this command"} />
    </>
};

export default BasicCrud;