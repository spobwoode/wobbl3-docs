import React from 'react'
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext'

export default function InputURL() {
    const { url } = useERC20QuickStart()

    return (
        <input
            type="text"
            name="url"
            id="url"
            value={url}
            readOnly
            style={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        />
    )
}
