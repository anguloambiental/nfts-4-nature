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
    const contract = '0xf5DDD5De35AFacEb11D39c0b2257dFc7a310A89f'
    const abi = require('./abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const metadataUri = `QmP7CUTQKDBc43QiuBYjrq73gx2cwfmM19FQGFkUZwopzi/${token}.json`
    const newTransaction = await mintNFTContract.payToMint(
      signer.address, metadataUri,{
        value: ethers.parseEther('0.001')
    })

    return {
      "signer": signer.address,
      "transaction": newTransaction,
    }  
  }
  