import './App.css';
import { getNFTs, claimNFT, LogIn, getData } from './nft_api';
import { useState } from 'react';

function App() {
  let [wallet, setWallet] = useState('')
  let [token_url, setTokenUrl] = useState([])
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

  return (
    <div className="App">
      <form onSubmit={e => getImages(e)}>
        <input type='text' placeholder='wallet' onChange={e => setWallet(e.target.value)} />
        <input type='submit' value='get NFTs' />
      </form>
      <button onClick={LogIn}>
        <span>Log In / Get Provider</span>
      </button>
      <button onClick={getData}>
        <span>Get Metamask Data / Signer</span>
      </button>
      <button onClick={claimNFT}>
        <span>Get Metamask Data / Signer</span>
      </button>
      {token_url.map(url => <img src={url} />)}
    </div>
  );
}

export default App;
