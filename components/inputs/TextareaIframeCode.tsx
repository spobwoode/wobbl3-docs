import React from 'react'
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext'

export default function TextareaIframeCode() {
    const { url } = useERC20QuickStart()

    return (
        <textarea
            name="iframeCode"
            id="iframeCode"
            value={`<iframe src="${url}" width="100%" height="100%" frameborder="0" allow="clipboard-write; clipboard-read"></iframe>`}
            readOnly
            style={{
                width: '100%',
                height: '120px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        />
    )
}
