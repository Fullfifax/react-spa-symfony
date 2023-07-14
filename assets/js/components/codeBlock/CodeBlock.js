import React from 'react';
import './codeblock.css'

const CodeBlock = ({code, paragraph = null}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
    }

    return (
        <>
            <p>{paragraph}</p>
            <br/>
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
            <br/>
        </>
    )
}

export default CodeBlock;