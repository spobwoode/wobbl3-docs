import React from 'react'
import { useERC20QuickStart } from './contexts/ERC20QuickStartContext'

export default function IframeSample() {
    const { url } = useERC20QuickStart()

    return (
        <div>
            <iframe
                src={url}
                width="805"
                height="600"
                frameBorder={2}
            />
        </div>
    )
}
