"use client"

import { useState } from "react"

const Maps = () => {

    const [sneak_peak, setSneak] = useState("images/Button.png")

    const rand_token_id = Math.floor(Math.random() * 6)
    const rand_token_id_1 = Math.floor(Math.random() * 6)
    const rand_token_id_2 = Math.floor(Math.random() * 6)

    function getNFT(element: any){
        console.log('click')
        console.log(element.attributes['data-token'].value)
    }

    function renderNFT(element: any){
        const name = element.attributes['data-token'].value
        setSneak(`images/${name}.png`)
    }

    return (
        <div className="main-cont column-cont">
            <h1>Cerro de la Estrella</h1>
            <h3>IZTAPALAPA</h3>
            <div className="row-cont">
                <div className="column-cont sneak-peak">
                    <img src={sneak_peak} alt="NFT Sneak Peak" />
                    <span>Hover the mouse to see the NFT's</span>
                    <span>Click if you want buy one!</span>
                    <span>30% goes to artist</span>
                    <span>70% goes to park and mantenance</span>
                </div>
                <div className="park_container">
                    <div className="button_container">
                        <div className="hex_button"></div>
                        <div className="hex_button"></div>
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button smaller" />
                        <div className="hex_button smaller" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div className="hex_button smaller" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button bigger" />
                        <div className="hex_button" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div className="hex_button smaller" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div className="hex_button smaller" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active bigger" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="5"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button smaller" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div data-token="3"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active" />
                        <div className="hex_button" />
                        <div className="hex_button smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active half-heigh" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active half-heigh smaller" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div className="hex_button" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div data-token="1"
                        onClick={e => getNFT(e.target)}
                        onMouseOver={e => renderNFT(e.target)}
                        className="hex_button active smaller" />
                        <div className="hex_button" />
                    </div>
                    <img src="images/CerroDeLaEstrella.png" className="park_image" alt="Cerro de la Estrella" />
                </div>
            </div>
        </div>
    )
}

export default Maps;