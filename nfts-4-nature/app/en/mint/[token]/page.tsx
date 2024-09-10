
// <div>My Post: {params.token_id}</div>
"use client"
import { getNFT } from "@/app/nft_api"
import { useState } from "react"
import Image from "next/image"

export default function Page({ params }: { params: { token: string } }) {

const [purchased, setPurchased ] = useState(false)
const [purchasedToken, setToken] = useState(-1)
const [contract, setContract] = useState("")
const [error, setError] = useState('')
const [pending, setPending] = useState(false)
let libelula = "/images/Libelula.png"
let invert = { "transform": "scaleX(-1)" }

  const para = {
  "width": "40%",
  "margin": "2% 0%"
  }

  const margin = {
  "margin": "0% 0%"
  }

  const info = require(`./../../../metadata_nft_dev/${params.token.split('.')[0]}.json`)
  console.log(info.attributes[1].value)

  function mintNft(){
    setPending(true)
    setPurchased(false)
    console.log("mint")
    getNFT(params.token, info.attributes[1].value).then(data => {
      if(data?.token){
        setToken(data.token)
        setContract(data.contract)
        setPurchased(true)
        setPending(false)
      }
      if(data?.error){
        setError(data.error)
        setPending(false)
      }
    })
  }

  return (
  <div className='main-cont column-cont'>
    {pending ? <h3>Waiting for Wallet Signature and Transaction Procesing</h3> : <></>}
    {purchased ? <div>
      <h3>Thankyou for Suporting</h3>
      <h4>Imoprt Information</h4>
      <h5>{contract}: {purchasedToken}</h5>
    </div> : <></>}
    { error != "" ? <div>
      <h3>Error</h3>
      <h5>{error}</h5>
    </div> : <></>}
    <div className='row-cont mint-hdr'>
      <Image src={libelula} style={invert} alt="libelula" width={200} height={200} />
      <div className='column-cont hdr-img'>
        <h1 className='title'>GET THIS NFT</h1>
        {params.token == 'mp4' ? <video width="500px" height="500px" loop autoPlay playsInline muted preload="none" >
                        <source src={`/images/artworks/${params.token}.png`} type="video/mp4" />
                        Browser not supported to play video
                    </video>  : <img src={`/images/artworks/${params.token}.png`} alt="nft" width="500px" height="500px" />}
        <h3 className='title'>AND SUPPORT THE PARK!</h3>
      </div>
      <Image src={libelula} alt="libelula" width={200} height={200} />
    </div>
    <h2>{info.name}</h2>
    <h3 style={margin}>{info.attributes[0].value}</h3>
    <p style={para}>{info.description}</p>
    <button className='square-button' onClick={e => mintNft()}>MINT THIS NFT</button>
  </div>)
}