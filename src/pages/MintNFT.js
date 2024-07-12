import '../App.css';
import { getNFT } from '../nft_api';
import { useState } from 'react';

function MintNFT() {
  // let [isLogedIn, setLogIn] = useState(false)
  let [token_url, setTokenUrl] = useState([])
  let token_images = []

  function mintNFT(){
    // let contract_address = "0x7Ad9d4557E1b7a14eEFf8a8cdA7762328251177F"
    let contract_address = "0xc70C35aCA682217d02bC3ceF2fc01C940dA9d3E6"
    getNFT(contract_address).then(tokenData => {
      tokenData.nfts.ownedNfts.forEach(nft => {
        token_images.push(nft.image.pngUrl)
      })
      setTokenUrl(token_images)
    })
  }

  return (
    <div className="mint-nft">
      <button onClick={e => mintNFT()}>
        <span>Mint NFT</span>
      </button><br/>
      <div className='nft-image-cont'>
        {token_url.map(url => <img src={url} alt="NFT token"/>)}
      </div>
    </div>
  );
}

export default MintNFT;