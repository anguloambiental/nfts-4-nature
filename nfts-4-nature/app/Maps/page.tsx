"use client"

const Maps = () => {

    const style = {
        "width": "100%",
        "height": "100%",
        "object-fit": "contain",
        "max-width": "1208px",
        "max-height": "770px",
    }

    function getNFT(element: any){
        console.log('click')
        console.log(element.attributes['data-token'].value)
    }

    function renderNFT(element: any){
        console.log(element.attributes['data-token'].value)
    }

    return (
        <div className="main-cont column-cont">
            <h1>MAPS</h1>
            <h3>IZTAPALAPA</h3>
            <span>chose the park to check out available units</span>
            <div className="park_container">
                <div className="button_container">
                    <div className="hex_button"></div>
                    <div className="hex_button"></div>
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button smaller" />
                    <div className="hex_button smaller" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button bigger" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button smaller" />
                    <div className="hex_button smaller" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div className="hex_button smaller" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button smaller" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active bigger" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button smaller" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active half-heigh" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active half-heigh" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div className="hex_button" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div data-token={Math.floor(Math.random() * 6)}
                    onClick={e => getNFT(e.target)}
                    onMouseOver={e => renderNFT(e.target)}
                    className="hex_button active" />
                    <div className="hex_button" />
                </div>
                <img src="images/CerroDeLaEstrella.png" style={style} alt="Cerro de la Estrella" />
            </div>
        </div>
    )
}

export default Maps;