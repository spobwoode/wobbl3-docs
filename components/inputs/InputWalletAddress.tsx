import React from 'react'
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext'

export default function InputWalletAddress() {
    const { referrerWalletAddress, setReferrerWalletAddress } = useERC20QuickStart()

    return (
        <input
            type="text"
            name="referrerWalletAddress"
            id="referrerWalletAddress"
            placeholder="Paste wallet address here"
            onChange={(e) => setReferrerWalletAddress(e.target.value)}
            value={referrerWalletAddress}
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
