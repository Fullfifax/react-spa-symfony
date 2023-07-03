import React from 'react';
import './codeblock.css'

const CodeBlock = ({code}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
    }

    return (
        <div className='code-block'>
            <div className='code-block-header'>
                <button className="copy-button" onClick={handleCopy}>Copy code</button>
            </div>
            <div className='code-block-content'>
                <pre>
                    <code>{code}</code>   
                </pre>
            </div>
        </div>
    )
}

export default CodeBlock;