
// <div>My Post: {params.token_id}</div>
"use client"
import { getNFT } from "@/app/nft_api"
import { useState } from "react"

export default function Page({ params }: { params: { token_id: string } }) {

  let libelula = "/images/Libelula.png"
  let invert = { "transform": "scaleX(-1)" }
  let height = { 
    "height": "15%",
    "marginBottom": "5%"
   }

   const info = require(`./../../metadata_nft/${params.token_id.split('.')[0]}.json`)
   console.log(info)
  return (
  <div className='main-cont column-cont'>
    <div className='row-cont mint-hdr'>
      <img src={libelula} style={invert} alt="libelula" />
      <div className='column-cont hdr-img'>
        <h1 className='title'>GET THIS NFT</h1>
        {params.token_id.split('.')[1] == 'mp4' ? <video width="320" height="240" controls>
                        <source src={`/images/piezas/${params.token_id}`} type="video/mp4" />
                    </video>  : <img src={`/images/piezas/${params.token_id}`} alt="nft" />}
        <h3 className='title'>AND SUPPORT THE PARK!</h3>
      </div>
      <img src={libelula} alt="libelula" />
    </div>
    <div style={height} className="row-cont margin-bot">
      <div className="column-cont full-height">
        <img src="/images/Main.png" className="image" alt="Artist Picture" />
        <h4>ARTIST</h4>
      </div>
      <h2>{info.attributes[0].value}</h2>
    </div>
    <button className='square-button' onClick={e => getNFT(params.token_id)}>MINT THIS NFT</button>
  </div>)
}