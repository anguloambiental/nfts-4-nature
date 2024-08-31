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

export async function getNFT (token: string){
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = '0x34A4894DE93f0694628390b40F4154c84d587cf7'
    const abi = require('./abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const metadataUri = `ipfs://QmP7CUTQKDBc43QiuBYjrq73gx2cwfmM19FQGFkUZwopzi/${token}.json`
    console.log(metadataUri)
    try {
        const newTransaction = await mintNFTContract.payToMint(
            signer.address, metadataUri,{
                value: 1000000000000000
            }
        )

        const recipt = await newTransaction.wait()
        console.log(newTransaction)
        console.log(recipt)
        return {
            "signer": signer.address,
            "transaction": newTransaction,
            "recipt": recipt
        }  
    } catch (e) {
        console.log("catch")
        console.log(e)
        return "Problem with minting"
    }
  }
  