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

export async function getArtist(ipfs: string){
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = '0x3cc1B12D7aaAeee0D9cFB251EA7e8FbC9322c151'
    const abi = require('./abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const artist = await mintNFTContract.viewArtist(ipfs)
    console.log(artist)
}

export async function addArtist(){
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = '0x3cc1B12D7aaAeee0D9cFB251EA7e8FbC9322c151'
    const abi = require('./abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const artist = await mintNFTContract.addToMap("", "", "")
    console.log(artist)
}

export async function getNFT (token: string, contract: string){
    const provider = new ethers.BrowserProvider(window.ethereum)
    try{
        const signer = await provider.getSigner()
        const abi = require('./abi/split_royalties_abi.json')
        const mintNFTContract = new ethers.Contract(contract, abi, signer)
        let metadataUri = `ipfs://QmP7CUTQKDBc43QiuBYjrq73gx2cwfmM19FQGFkUZwopzi/${token}.json`
        if(token === "20"){
            metadataUri = "ipfs://QmPo9KG5vif9PjHUY44GSKPWAa1bGqprpVhr21qXeEVoZe"
            console.log(metadataUri)
        }
        console.log(metadataUri)
        try {
            const newTransaction = await mintNFTContract.payToMint(
                signer.address, metadataUri,{
                    value: ethers.parseEther('0.016')
                }
            )
            await newTransaction.wait()
            const nextToken = await mintNFTContract.lastToken()

            const token = Number(nextToken) - 1

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
        }
    }catch{
        console.log("LogIn")
    }
  }
  