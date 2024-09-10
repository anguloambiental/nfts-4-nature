"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const About = () => {
    const router = useRouter()

    return (
        <div className='main-cont'>
            <div className="about-header row-cont">
                <Image src="/images/Libelula.png" alt="libelula" width={500} height={500}/>
                <div className='column-cont'>
                    <h2 className='title'>ABOUT</h2>
                    <h1 className='title'>CEIBA 3.0</h1>
                </div>
            </div>
            <div className='row-cont about-info'>
                <Image src="/images/Main.png" alt="libelula" width={500} height={300}/>
                <div className='pagraph'>
                    <p>
                        At Ceiba-3, art and technology come together to preserve nature. With our restorative NFTs, you can sponsor a park, support artists, and actively participate in environmental restoration—all from the comfort of your home.
                        <br/><br/>
                        Get an NFT and sponsor a park.<br/>
                        Your contribution goes towards buying native species, maintaining green areas, and supporting biologists and researchers.<br/>
                        Receive photos and tangible evidence of your positive impact.<br/>
                        <br/>
                        Money Distribution:<br/>
                        30% of each NFT value goes directly to the artists.<br/>
                        40% is dedicated to park restoration in CDMX.<br/>
                        Plus, you get digital art, access to exclusive events, and more.<br/>
                        Our commitment is transparency, using blockchain to ensure every contribution reaches where it’s needed most.<br/>
                        At Ceiba-3, transforming the world is possible, and you can be part of the change!<br/><br/>
                    </p>
                    <button className='square-button' onClick={() => router.push('/en/gallery')}>Start Minting</button>
                </div>
            </div>
        </div>
    )
}

export default About;
