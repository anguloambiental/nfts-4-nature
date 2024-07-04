import '../App.css';
import { getNFT } from '../nft_api';
import { useState } from 'react';

function MintNFT() {
  // let [isLogedIn, setLogIn] = useState(false)
  let [token_url, setTokenUrl] = useState([])
  let token_images = []

  function mintNFT(){
    let contract_address = "0x8e18366b4Fef61d31B0DB085Ee139626a904292D"
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