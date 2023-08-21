import React, { useContext, useState } from "react"

type ERC20QuickStartContextType = {
    tokenContractAddress: string,
    setTokenContractAddress: (tokenContractAddress: string) => void,
    referrerWalletAddress: string,
    setReferrerWalletAddress: (referrerWalletAddress: string) => void,
    chainName: string,
    setChainName: (chainName: string) => void,
    url: string,
    payoutCurrency: string,
    setPayoutCurrency: (payoutCurrency: string) => void,
};

const ERC20QuickStartContext = React.createContext<ERC20QuickStartContextType>({
    tokenContractAddress: "",
    setTokenContractAddress: () => {},
    referrerWalletAddress: "",
    setReferrerWalletAddress: () => {},
    chainName: "",
    setChainName: () => {},
    url: "",
    payoutCurrency: "inputToken",
    setPayoutCurrency: () => {},
})

export function ERC20QuickStartProvider({ children }) {
    const [tokenContractAddress, setTokenContractAddress] = useState("0x6982508145454ce325ddbe47a25d4ec3d2311933") // defaults to $PEPE
    const [referrerWalletAddress, setReferrerWalletAddress] = useState("0x383fb35C0fEa02EA80a20F214861Cd20685f32C4") // defaults to charity referrer address
    const [chainName, setChainName] = useState("ethereum")
    const [url, setUrl] = useState("https://app.wobbl3.io")
    const [payoutCurrency, setPayoutCurrency] = useState("inputToken")

    React.useEffect(() => {
        setUrl(`https://app.wobbl3.io/${tokenContractAddress}?r=${referrerWalletAddress}&chain=${chainName}&payoutCurrency=${payoutCurrency}`)
        //setUrl(`http://localhost:3001/${tokenContractAddress}?r=${referrerWalletAddress}&chain=${chainName}`)
    }, [chainName, referrerWalletAddress, tokenContractAddress, payoutCurrency])

    return (
        <ERC20QuickStartContext.Provider
            value={{
                tokenContractAddress,
                setTokenContractAddress,
                referrerWalletAddress,
                setReferrerWalletAddress,
                chainName,
                setChainName,
                url,
                payoutCurrency,
                setPayoutCurrency,
            }}
        >
            {children}
        </ERC20QuickStartContext.Provider>
    )
}

export function useERC20QuickStart() {
    const context = useContext(ERC20QuickStartContext)
    if (context === undefined) {
        throw new Error(
            `useERC20QuickStart must be used within a ERC20QuickStartProvider`
        )
    }
    return context
}