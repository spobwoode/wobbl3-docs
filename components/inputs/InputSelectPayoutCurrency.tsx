// /components/inputs/InputSelectPayoutCurrency.tsx

import React from 'react';
import { useERC20QuickStart } from '../contexts/ERC20QuickStartContext';

export default function InputSelectPayoutCurrency() {
    const { 
        payoutCurrency, 
        setPayoutCurrency
    } = useERC20QuickStart();

    return (
        <select
            name="payoutCurrency"
            id="payoutCurrency"
            onChange={(e) => setPayoutCurrency(e.target.value)}
            value={payoutCurrency}
            style={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        >
            <option value="inputToken">Native Token (ETH or MATIC)</option>
            <option value="outputToken">Output Token</option>
        </select>
    )
}