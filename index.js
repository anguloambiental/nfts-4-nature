
const { Network, Alchemy } = require("alchemy-sdk");

require('dotenv').config()

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: `${process.env.API_KEY}`, // Replace with your Alchemy API Key.
  network: Network.BASE_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  // Wallet address
  const address = "0x6Edcc80f55390E3BEB0E42e3c9d86707BB702BDF";
  
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address);

  // Parse output
  const numNfts = nfts["totalCount"];
  const nftList = nfts["ownedNfts"];

  console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);

  let i = 1;

  for (let nft of nftList) {
    console.log(`nft_address. ${nft.contract.address}`);
    console.log(`token_id. ${nft.tokenId}`);
    console.log(`token_id. ${nft.name}`);
    i++;
  }
}

main();