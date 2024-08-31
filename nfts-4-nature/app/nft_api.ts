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
    const contract = '0x75C80A8dfF0F553Ff658bf7e5398a9D3515660d2'
    const abi = require('./abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const metadataUri = `ipfs://QmVyMgME2qnfXXZvGa3oyepCL6PNFURXftT6ti511jh2Dd/${token}.json`
    const newTransaction = await mintNFTContract.payToMint(
      signer.address, metadataUri,{
        value: ethers.parseEther('0.001')
    })

    return {
      "signer": signer.address,
      "transaction": newTransaction
    }  
  }
  