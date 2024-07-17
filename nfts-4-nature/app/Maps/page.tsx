import ImageButton from "../Components/ImageButton";

const Maps = () => {

    const style = {
        "width": "100%",
        "height": "100%",
        "object-fit": "contain"
    }
    return (
        <div className="main-cont column-cont">
            <h1>MAPS</h1>
            <h3>IZTAPALAPA</h3>
            <span>chose the park to check out available units</span>
            <img src="images/CerroDeLaEstrella.png" style={style} alt="Cerro de la Estrella" />
        </div>
    )
}

export default Maps;