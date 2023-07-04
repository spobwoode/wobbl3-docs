import React from 'react'
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext'

export default function InputERC20ContractAddress() {
    const { tokenContractAddress, setTokenContractAddress } = useERC20QuickStart()

    return (
        <input
            type="text"
            name="tokenContractAddress"
            id="tokenContractAddress"
            placeholder="Paste token contract address here"
            onChange={(e) => setTokenContractAddress(e.target.value)}
            value={tokenContractAddress}
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
