"use client"

import Image from "next/image";
import { ibm, monts } from "./fonts";
import NFTthumbnail from "./components/NFTthumbnail";

export default function Home() {

  const artists = Array(30)
  const invert = {
    "transform": "scaleX(-1)"
  }
  
  return (
    <main className={`${monts.className}`}>
      <div className={`${ibm.className}`}>
            <Image src="/images/Main.png" className="main-image" alt="Ceiba Logo" width={500} height={300}/>
            <h1 >CEIBA-3</h1>
            <h2 >NFTS FOR NATURE</h2>
        </div>
        <div className={`title-w-images ${ibm.className}`}>
          <Image src="/images/Libelula.png" alt="libelula" width={200} height={100}/>
          <h3 className='title'>WHAT ARE WE DOING?</h3>
          <Image style={invert} src="/images/Libelula.png" alt="libelula" width={200} height={100}/>
        </div>
        <p>
            At <b>Ceiba-3</b>, art and technology come together to preserve nature. With our restorative NFTs, you can sponsor a park, support artists, and actively participate in environmental restoration—all from the comfort of your home.
            <span className={`${ibm.className} p-title`}>Get an NFT and sponsor a park</span>
            Your contribution goes towards buying native species, maintaining green areas, and supporting biologists and researchers.<br/>
            Receive photos and tangible evidence of your positive impact.
            <br/><br/><b className="bigger-font">Money Distribution:</b><br/><br/>
            <b>30%</b> of each NFT value goes directly to the <b>artists</b>.<br/>
            <b>40%</b> is dedicated to park <b>restoration</b> in CDMX.<br/><br/>
            Plus, you get <b>digital art</b>, access to exclusive events, and more.<br/>
            Our commitment is <b>transparency, using blockchain</b> to ensure every contribution reaches where it&apos;s needed most.<br/>
            At <b>Ceiba-3</b>, transforming the world is possible, and you can be part of the change! ffff
        </p>
        <div className={`title-w-images ${ibm.className}`}>
            <Image style={invert} src="/images/Libelula.png" alt="libelula" width={200} height={100}/>
            <h2 className='title'>Browse NFTs for Impact</h2>
            <Image src="/images/Libelula.png" alt="libelula" width={200} height={100}/>
        </div>
        <div className="gallery">
            {Array.from({ length: artists.length }, (_, i) => <NFTthumbnail key={i} token={i} />)}
        </div>
    </main>
  );
}

