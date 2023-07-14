import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const InstallSymfony = () => {
    const codeSnippetInstallSymfony = `symfony new --webapp your_app_name --version=lts`;
    const codeSnippetConfigureEnv = `
        # In all environments, the following files are loaded if they exist,
        # the latter taking precedence over the former:
        #
        #  * .env                contains default values for the environment variables needed by the app
        #  * .env.local          uncommitted file with local overrides
        #  * .env.$APP_ENV       committed environment-specific defaults
        #  * .env.$APP_ENV.local uncommitted environment-specific overrides
        #
        # Real environment variables win over .env files.
        #
        # DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE NOR IN ANY OTHER COMMITTED FILES.
        # https://symfony.com/doc/current/configuration/secrets.html
        #
        # Run "composer dump-env prod" to compile .env files for production use (requires symfony/flex >=1.2).
        # https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration

        ###> symfony/framework-bundle ###
        APP_ENV=dev
        APP_SECRET=a8ca554edcbc30b9a2b313252b3381a6
        ###< symfony/framework-bundle ###

        ###> doctrine/doctrine-bundle ###
        # Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
        # IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
        #
        # DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
        DATABASE_URL="mysql://your_usename:your_password@localhost:8000/your_db_name?charset=utf8mb4"
        # DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=15&charset=utf8"
        ###< doctrine/doctrine-bundle ###

        ###> symfony/messenger ###
        # Choose one of the transports below
        # MESSENGER_TRANSPORT_DSN=amqp://guest:guest@localhost:5672/%2f/messages
        # MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages
        MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0
        ###< symfony/messenger ###

        ###> symfony/mailer ###
        # MAILER_DSN=null://null
        ###< symfony/mailer ###
    `;
    const codeSnippetCreateDatabase = `php bin/console doctrine:database:create`;

    return <>
        <CodeBlock code={codeSnippetInstallSymfony} paragraph={"Create a Symfony project"} />
        <CodeBlock code={codeSnippetConfigureEnv} paragraph={"Configure your .env.local file"} />
        <CodeBlock code={codeSnippetCreateDatabase} paragraph={"Create the database once you configured your .env.local file"} />
    </>
};

export default InstallSymfony;