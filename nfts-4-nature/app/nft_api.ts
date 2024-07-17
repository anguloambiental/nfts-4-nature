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