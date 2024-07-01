In the bustling city of Mexico City, there exists a remarkable haven known as Ceiba3. Here, art and nature converge in a beautiful and purposeful union, inviting individuals to partake in a truly inspiring experience.

At Ceiba3, talented artists craft stunning NFTs inspired by the city's parks, offering a glimpse into the beauty that surrounds us. By acquiring these unique digital treasures, participants not only support the artists but also contribute to the preservation and rejuvenation of the parks that are so dear to our hearts.

As users delve into the world of Ceiba3, they embark on a journey of exploration and creativity, immersing themselves in a vibrant community that champions art, nature, and technological innovation. This platform serves as a beacon for the growing web3 community, providing a space where individuals can connect, learn, and thrive together.

Minting NFTs at Ceiba3 is not just a transaction; it is a joyful and seamless experience that transforms the act of collecting art into a fun and rewarding adventure. With user-friendly features and a commitment to accessibility, Ceiba3 makes it easy for everyone to participate in this exciting new frontier of digital art.

By joining Ceiba3, individuals not only support environmental conservation and artistic expression but also become part of a movement that is shaping the future of the web3 community. Together, we can embrace the power of technology, creativity, and community to create a more vibrant, sustainable, and connected world for all.

### Start project
- npm install
- npm start
**Created with Create React App (CRA)**

### Dependencies
- "alchemy-sdk": "^3.3.1",
    - Used to get all the NFT data from the blockchain
- "ethers": "^6.13.1"
    - Used to interact with the contracts
    - Used to interact with wallets

### Get Wallet and Provider

Concepts:
- Provider = The provider of information to connect to the chains
    - In this project we grab Metamask provider through window.etherium
        - provider = new ethers.BrowserProvider(window.ethereum)
    - Once you get the provider you can get the information of wallet
        - Signer
        - Network
        - And more, in this project only using signer
- Signer = The wallet information to interact with the blockchain
    - signer.address = Wallet address
    - there is mor information inside the signer objet
    - when you want to interact with a contract you need to send the whole signer object
        - const mintNFTContract = new ethers.Contract(contract_address, abi, signer)


### Steps to upload images to be minted through contract

1. Go to [Pinata](https://app.pinata.cloud/pinmanager)
2. Upload image
3. Copy CID
4. Create JSON metadata for NFT
    {
        "name": "Ceiba3 Tree",
        "description": "Ceiba3 Tree",
        "image": "ipfs://COPIED_CID",
        "attributes": [
            {"trait_type":"Plant","value":"Tree"}
        ]
    }
5. Upload file to [Pinata](https://app.pinata.cloud/pinmanager)
6. Copy CID
7. Add that CID you need to send to create the Mint
    **THE NFT MINT URI NEED TO BE JSON METADATA FILE**


### Create Smart Contract

There are multiple ways to do it, in this project we took the aproach of using:
- [Open Zepelin Wizard](https://wizard.openzeppelin.com/)
    - To create the template of contract
    - Tamplate ERC721, with Mint, AI, URI storage check boxes
    - Click button Open in Remix
- [Ramix](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.26+commit.8a97fa7a.js)
    - We used it to edit the contract and Deploy to BlockChain
    - After creating template click on Open in Remix
    - Change Safe Mint function to be able to Pay to Mint from any Wallet
        - - Copy of SafeMint but made it payable and available to any wallet
            - function safeMint(address to, string memory uri) public onlyOwner
            - function payToMint(address to, string memory uri) public payable returns (uint256)
    - Compile contract to sava
    - Copy abi from contract to a JSON file and save it inside project
        - On bottom of menu there is a button __copy abi__
    - Go to Deploy and Run transactions on menu tab (has look alike ether logo)
    - Connect Metamask
    - Add Initial Owner Addres and Deploy
        - It is and orange button and besides the input for owner address
    - Go to section Deployed contracts and copy the contract address


### Interact with contract to Mint NFT

1. Make sure that ethers is installed in project
2. Make sure that you have the JSON abi file
3. Make sure you have the contract address
4. Instanciate contract
    - const mintNFTContract = new ethers.Contract(contract_address, abi, signer)
    - Once this is executed you will have an object to interact with the contract funcitons
    - const newToken = await mintNFTContract.payToMint(signer.address, metadataUri, {
        value: ethers.parseEther('0.0001')
      })
    - Make sure that the **metadataUri is the CID of the JSON metadata** you want to mint
    - Since it is a payable object you need to send the amount to be paid, it has to be more than the one writen in the contract
    - Need to handle contract errors as exceptions
        - For example if the amount sent is less than the amount on the contract you'll catch the error to get the message


### Get all NFT from a wallet address

- Make sure to have installed Alchemy Sdk
- Get [Alchemy API](https://dashboard.alchemy.com/)
    - Create new app, after creation API Key will bee on top right corner
- Configure Settings
    - const settings = {
        apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
        network: Network.BASE_SEPOLIA, // Replace with your network.
      };
- Instanciate sdk
    - const alchemy = new Alchemy(settings);
- Get owned NFT's contract address
    - const nfts = await alchemy.nft.getNftsForOwner(address)
- Get NFT's metadata for each address
    - data['tokens'][i] = await alchemy.nft.getNftMetadata(contract_address, tokenId);
