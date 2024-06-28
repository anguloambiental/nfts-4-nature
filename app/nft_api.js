import { Network, Alchemy } from "alchemy-sdk";
import 'dotenv/config'

const NFTapi = async (walletAddress) => {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: `${process.env.API_KEY}`, // Replace with your Alchemy API Key.
    network: Network.BASE_MAINNET, // Replace with your network.
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
    // console.log(`nft_address. ${nft.contract.address}`);
    // console.log(`token_id. ${nft.tokenId}`);
    // console.log(`token_id. ${nft.name}`);
    // console.log("fetching metadata for a Crypto Coven NFT...");
    data['tokens'][i] = await alchemy.nft.getNftMetadata(
      `${nft.contract.address}`,
      `${nft.tokenId}`
    );
    
    // console.log("NFT name: ", data['tokens'].name);
    // console.log("token type: ", data['tokens'].tokenType);
    // console.log("tokenUri: ", data['tokens'].tokenUri.gateway);
    // console.log("image url: ", data['tokens'].image.originalUrl);
    // console.log("time last updated: ", data['tokens'].timeLastUpdated);
    // console.log("===");
    i++;
  }
  
  return data
}

export default NFTapi