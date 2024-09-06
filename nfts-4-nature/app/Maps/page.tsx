"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

const Maps = () => {

    const [sneak_peak, setSneak] = useState("/images/piezas/12.png")
    const [sneak_vid, setVid] = useState(false)

    const router = useRouter()

    function getNFT(element: any){
        const nft = element.attributes['data-token'].value
        router.push(`/Mint/${nft}`)
    }

    function renderNFT(element: any){
        const name = element.attributes['data-token'].value
        if(name.split('.')[1] == 'mp4'){
            setVid(true)
            setSneak(`images/piezas/${name}`)
        }else{
            setVid(false)
            setSneak(`/images/piezas/${name}`)
        }
    }

    return (
        <div className="main-cont column-cont">
            <div className="map-title">
                <h1>Cerro de la Estrella</h1>
                <h3>IZTAPALAPA</h3>
            </div>
            <div className="row-cont">
                <div className="column-cont sneak-peak">
                    {sneak_vid ?  <video width="320px" height="240px" loop autoPlay playsInline muted preload="none" >
                        <source src={sneak_peak} type="video/mp4" />
                    </video>  : <img src={sneak_peak} alt="NFT Sneak Peak" width="320px" height="240px" />}
                    <span>Hover the mouse to see the NFT&apos;s</span>
                    <span>Click if you want buy one!</span>
                    <span>30% goes to artist</span>
                    <span>70% goes to park and mantenance</span>
                </div>
                <div className="park_container">
                    <div className="button_container">
                        <div className="hex_button"></div>
                        <div className="hex_button"></div>
                        <div data-token="20.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button smaller active " />
                        <div data-token="1.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="2.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button smaller active" />
                        <div data-token="3.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button smaller active" />
                        <div className="hex_button " />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div data-token="5.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="19.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button bigger active" />
                        <div data-token="6.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active " />
                        <div data-token="7.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button " />
                        <div data-token="22.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="13.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="0.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="4.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button "/>
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div className="hex_button" />
                        <div className="hex_button"/>
                        <div data-token="12.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="9.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active "/>
                        <div data-token="14.jpg"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active"/>
                        <div data-token="16.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active "/>
                        <div data-token="17.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller"/>
                        <div data-token="11.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div data-token="15.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active " />
                        <div data-token="18.jpeg"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active " />
                        <div data-token="10.png"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active " />
                        <div className="hex_button" />
                        <div data-token="21.jpeg"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active "/>
                        <div data-token="8.mp4"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active " />
                    </div>
                    <Image src="/images/CerroDeLaEstrella.png" className="park_image" alt="Cerro de la Estrella" height={500} width={300}/>
                </div>
            </div>
        </div>
    )
}

export default Maps;