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

export async function claimNFT (contract_address){

  await LogIn()
  await getData()
  const abi = require('./abi.json')
  const mintNFTContract = new ethers.Contract(contract_address, abi, signer)
  const metadataUri = "QmNMFinsXhwSw8Vf8ZiEWpYdMePzSj8jS55sM6HjzXaNSF"
  const newTransaction = await mintNFTContract.payToMint(signer.address, metadataUri, {
    value: ethers.parseEther('0.0001')
  })
  const tokenId = await mintNFTContract.count()
  const nfts = await getNFTofContract(signer.address, contract_address)

  return {
    "signer": signer.address,
    "tokenId": tokenId,
    "contract": contract_address,
    "transaction": newTransaction,
    "nfts": nfts
  }  
}

export default { getNFTs, claimNFT, LogIn, getData }