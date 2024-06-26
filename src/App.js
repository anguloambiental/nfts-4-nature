import './App.css';
import { useState } from 'react';
import { ZDK } from "@zoralabs/zdk";

const API_ENDPOINT = "https://api.zora.co/graphql";
const zdk = new ZDK({ endpoint: API_ENDPOINT });


function App() {
  
  const [nft, setNFT] = useState("")

  const getNFT = (event) => {
    event.preventDefault()

    const args = {
      where: {collectionAddresses: [
          "0xE169c2ED585e62B1d32615BF2591093A629549b6",
          "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63",
          nft
        ]
      },
      includeFullDetails: false
    }

    zdk.collections(args)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }

  return (
    <form onSubmit={getNFT}>
      <input type='text' onChange={(e) => {setNFT(e.target.value)}}/>
      <input type='submit' value='Get NFT' />
    </form>
  );
}

export default App;
