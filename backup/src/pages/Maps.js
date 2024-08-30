import ImageButton from '../components/ImageButton'

const Maps = () => {

    return (
        <div className="main-cont column-cont">
            <h1>MAPS</h1>
            <h3>IZTAPALAPA</h3>
            <span>chose the park to check out available units</span>
            <ImageButton
                img_src='images/Button.png'
                label='Mapa Parque'
                go_to='/mint' />
        </div>
    )
}

export default Maps;
