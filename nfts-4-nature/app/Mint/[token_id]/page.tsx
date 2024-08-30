
// <div>My Post: {params.token_id}</div>
"use client"
import { getNFT } from "@/app/nft_api"

export default function Page({ params }: { params: { token_id: string } }) {

  let libelula = "/images/Libelula.png"
  let invert = { "transform": "scaleX(-1)" }
  let height = { 
    "height": "15%",
    "margin-bottom": "5%"
   }
   console.log(params.token_id)
  return (
  <div className='main-cont column-cont'>
    <div className='row-cont mint-hdr'>
      <img src={libelula} style={invert} alt="libelula" />
      <div className='column-cont hdr-img'>
        <h1 className='title'>GET THIS NFT</h1>
        <img src={`/images/${params.token_id}.png`} alt="libelula" />
        <h3 className='title'>AND SUPPORT THE PARK!</h3>
      </div>
      <img src={libelula} alt="libelula" />
    </div>
    <div style={height} className="row-cont margin-bot">
      <div className="column-cont full-height">
        <img src="/images/Main.png" className="image" alt="Artist Picture" />
        <h4>ARTIST</h4>
      </div>
      <h2>ARTIST NAME</h2>
    </div>
    <button className='square-button' onClick={e => getNFT(params.token_id)}>MINT THIS NFT</button>
  </div>)
}