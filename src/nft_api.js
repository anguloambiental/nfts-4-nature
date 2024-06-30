import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";

let provider = null
let signer = null
let network = null
let balance = null

export async function getNFTs (walletAddress) {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: 'AlchemyAPI', // Replace with your Alchemy API Key.
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
  } else {
      provider = new ethers.BrowserProvider(window.ethereum)
  }
}

export async function getData (){
  signer = await provider.getSigner()
  network = await provider.getNetwork()
  balance = await provider.getBalance(signer.address)

  console.log(signer, network, balance)
}

export async function claimNFT (){
  const abi = require('./drop-abi.json')
  let contract_address = "0x3f6Fee6Ca708442d76cd084a31D87095FDaFcA45"
  const mintNFTContract = new ethers.Contract(contract_address, abi, signer)
  const claimToken = await mintNFTContract.nextTokenIdToClaim()
  const tokenUri = await mintNFTContract.tokenURI(claimToken)

  console.log('claimToken', claimToken)
  console.log('tokenUri', tokenUri)
}

export default { getNFTs, claimNFT, LogIn, getData }