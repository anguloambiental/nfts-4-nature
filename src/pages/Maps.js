import ImageButton from '../components/RedirectButton'

const Home = () => {

    return (
        <div className="log-in-container">
            <h1>MAPS</h1>
            <h3>IZTAPALAPA</h3>
            <span>chose the park to check out available units</span>
            <ImageButton 
                label='MapaParque'
                got_to='/mintNFT'
            />
        </div>
    )
}

export default Home;
