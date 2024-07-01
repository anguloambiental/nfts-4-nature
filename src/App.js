import './App.css';
import { getNFTs, claimNFT, LogIn, getData } from './nft_api';
import { useState } from 'react';

function App() {
  let [wallet, setWallet] = useState('')
  let [token_url, setTokenUrl] = useState([])
  let [isLogedIn, setLogIn] = useState(false)
  let token_images = []

  function getImages(event){
    event.preventDefault()
    getNFTs(wallet).then(ownedNFT => {
      ownedNFT.tokens.forEach(token => {
        token.name === 'poop' ? console.log('no image') : token_images.push(token.image.pngUrl)
      })
      setTokenUrl(token_images)
    })
  }

  function mintNFT(){
    let contract_address = "0x8e18366b4Fef61d31B0DB085Ee139626a904292D"
    claimNFT(contract_address).then(tokenData => {
        console.log(tokenData)
    })
  }

  return (
    <div className="App">
      <button onClick={e => mintNFT()}>
        <span>Mint NFT</span>
      </button>
      {token_url.map(url => <img src={url} />)}
    </div>
  );
}

export default App;
