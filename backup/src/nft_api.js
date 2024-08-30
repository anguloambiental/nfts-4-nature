import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";

let provider = null
let signer = null
let network = null
let balance = null

export async function getNFTs (walletAddress) {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: 'nG_L8EZrdYAp--XTv9uL7DhkVfrndaJF', // Replace with your Alchemy API Key.
    network: Network.BASE_SEPOLIA, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);

  // Print owner's wallet address:
  const address = `${walletAddress}`;
  
  let data = {
    nfts: [],
    num_nft: [],
    tokens: []
  }

  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address);

  // Parse output
  data['num_nft'] = nfts["totalCount"];
  data['nfts'] = nfts["ownedNfts"];

  // console.log(`Total NFTs owned by ${address}: ${data['num_nft']} \n`);

  let i = 1;

  for (let nft of data['nfts']) {

    data['tokens'][i] = await alchemy.nft.getNftMetadata(
      `${nft.contract.address}`,
      `${nft.tokenId}`
    );

    i++;
  }
  
  return data
}

export async function LogIn (){
  if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults")
      provider =  ethers.getDefaultProvider()
      return false
  } else {
      provider = new ethers.BrowserProvider(window.ethereum)
      return true
  }
}

export async function getData (){
  signer = await provider.getSigner()
  network = await provider.getNetwork()
  balance = await provider.getBalance(signer.address)

  console.log(signer, network, balance)
}

async function getNFTofContract(owner, contract){
  const settings = {
    apiKey: 'nG_L8EZrdYAp--XTv9uL7DhkVfrndaJF', // Replace with your Alchemy API Key.
    network: Network.BASE_SEPOLIA, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);

  let options = {
    contractAddresses: contract
  };

  let nfts = await alchemy.nft.getNftsForOwner(owner, options);

  return nfts
}

export async function getNFT (contract_address){

  await LogIn()
  await getData()
  const abi = require('./abi/split_abi.json')
  const mintNFTContract = new ethers.Contract(contract_address, abi, signer)
  const metadataUri = "QmP7CUTQKDBc43QiuBYjrq73gx2cwfmM19FQGFkUZwopzi/3.json"
  const third = "0x51413CD4A20A7Bbc6fEBc869c6d152Df9dac2d09"
  const newTransaction = await mintNFTContract.payToMint(
    signer.address, metadataUri, third,{
      value: ethers.parseEther('0.001')
  })
  const nfts = await getNFTofContract(signer.address, contract_address)
  

  return {
    "signer": signer.address,
    "contract": contract_address,
    "transaction": newTransaction,
    "nfts": nfts
  }  
}

const functions = { getNFTs, getNFT, LogIn, getData }

export default functions