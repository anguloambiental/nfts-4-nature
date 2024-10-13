"use client"

import { monts, ibm } from "@/app/fonts";
import Image from "next/image";
import Modal from "./components/modal";
import { useState } from "react";
import { ethers } from "ethers";

type params = { 
    params: {
        token: string
    }
}

declare var window: any

async function payToMint(token: string){
    const metadata = require(`@/metadata_nft_prod/${token}.json`);
    const provider = new ethers.BrowserProvider(window.ethereum)
    const network = await provider.getNetwork()

    if(network.name != 'base'){
        return {
        "error": "Wrong Network",
        "message": "Go to Base Network"
      }
    }

    const signer = await provider.getSigner()
    const contract = metadata.attributes[1].value
    const abi = require('@/abi/split_royalties_abi.json')
    const mintNFTContract = new ethers.Contract(contract, abi, signer)
    const newTransaction = await mintNFTContract.payToMint(
      signer.address, 0,{
        value: ethers.parseEther('0.017')
    })

    return {
      "signer": signer.address,
      "transaction": newTransaction
    }
}

export default function MintPage({ params }: params){
    const marginBig = {
        "margin": "4% 0"
    }

    const error = {
        "marginTop": "15%"
    }

    const padding = {
        "paddingBottom": "5%"
    }

    const [ wallet, setWallet ] = useState(false)

    setTimeout(() => {if(window.ethereum) {setWallet(true)}}, 100)

    const metadata = require(`@/metadata_nft_prod/${params.token}.json`);
    const art_path = metadata.animation_url ?
        metadata.animation_url.split('/')[3] 
        : metadata.image.split('/')[3]

    console.log(art_path)

    return(
        <main style={padding} className={`${monts.className}`}>
            <h1 className={`${ibm.className} margin-top`}>{metadata.name}</h1>
            {metadata.animation_url ? 
                <video style={marginBig} width="500px" height="500px" controls loop autoPlay playsInline muted preload="none" >
                <source src={`/images/artworks/${art_path}`} type="video/mp4" />
                Browser not supported to play video
                </video> 
                : <Image style={marginBig} src={`/images/artworks/${art_path}`} alt="nft" width={500} height={500} /> 
            }
            <h2 className={`${ibm.className}`}>{metadata.attributes[0].value}</h2>
            <p className="margin-small">{metadata.description}</p>
            { wallet ? 
                <button className='square-button' onClick={() => payToMint(params.token)}>MINT THIS NFT</button> 
                : < Modal title="Select Wallet" message="Go to your prefered Wallet Browser" wallet />}
        </main>
    )
}