import React from 'react'
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext'

export default function SelectChain() {
    const { chainName, setChainName } = useERC20QuickStart()

    return (
        <select
            name="chainName"
            id="chainName"
            onChange={(e) => setChainName(e.target.value)}
            value={chainName}
            style={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        >
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            <option value="bsc">Binance Smart Chain</option>
        </select>
    )
}
