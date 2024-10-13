import { ethers } from "ethers";

declare var window: any

export async function LogIn() {
    let provider = null;
    let signer = null;
    if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults")
        provider =  ethers.getDefaultProvider()
        return 0
    } else {
        provider = new ethers.BrowserProvider(window.ethereum)
        try{
            signer = await provider.getSigner()
        }catch (e){
            return -1
        }
        return 1
    }
}

export async function getNFT (token: string, contract: string){
    const provider = new ethers.BrowserProvider(window.ethereum)
    const network = await provider.getNetwork()
    console.log(network.chainId)
    if(network.name == "base"){
        try{
            const signer = await provider.getSigner()
            const abi = require('./abi/split_royalties_abi.json')
            const mintNFTContract = new ethers.Contract(contract, abi, signer)
            try {
                const newTransaction = await mintNFTContract.payToMint(
                    signer.address, 0,{
                        value: ethers.parseEther('0.017')
                    }
                )
                await newTransaction.wait()
                const nextToken = await mintNFTContract.lastToken()
    
                const token = Number(nextToken) - 1
                console.log(newTransaction)
                return {
                    "contract": contract,
                    "token": 0
                }  
            } catch (e: any) {
                console.log("catch")
                console.log(e.message)
                if(e.message.includes("Gas")){
                    console.log("not enough money")
                    return {
                        "contract": contract,
                        "error": "Add Funds to Wallet, Base Network ETH"
                    }
                }
                if(e.message.includes('rejected')){
                    console.log("Rejected")
                    return {
                        "contract": contract,
                        "error": "Wallet Signature Rejected"
                    }
                }
                if(e.message.includes('Network')){
                    console.log("Rejected")
                    return {
                        "contract": contract,
                        "error": "Make sure you are in Base Sepolia or have an Stable Internet"
                    }
                }
            }
        }catch{
            console.log("LogIn")
        }
    }else{
        return {
            "contract": contract,
            "error": "Make sure you are in Base Mainnet"
        } 
    }
  }
  