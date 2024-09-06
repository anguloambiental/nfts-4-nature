import ImageButton from '../Components/ImageButton'
import Image from 'next/image'

const Home = () => {

    let libelula = "/images/Libelula.png"
    let invert = { "transform": "scaleX(-1)" }

    return (
        <div className="main-cont">
            <div className='row-cont profile-hdr'>
                <Image src={libelula} style={invert} alt="libelula" width={300} height={300}/>
                <div className='column-cont hdr-img'>
                    <h1 className='title'>CEIBA 3.0</h1>
                    <Image src="/images/Main.png" alt="libelula" width={300} height={300} />
                    <h3 className='title'>NFTS FOR NATURE</h3>
                </div>
                <Image src={libelula} alt="libelula" width={300} height={300}/>
            </div>
            <div className='column-cont profile-buttons'>
                <div className='row-cont'>
                    <ImageButton 
                        label='About'
                        go_to='/NoWallet'
                        img_src='images/Button.png' />
                    <ImageButton 
                        label='Profile'
                        go_to='/Profile'
                        img_src='images/Button.png' />
                </div>
                <div className='row-cont profile-buttons'>
                    <ImageButton 
                        label='Maps'
                        go_to='/Maps'
                        img_src='images/Button.png' />
                    <ImageButton 
                        label='Artist'
                        go_to='/Artist'
                        img_src='images/Button.png' />
                </div>
            </div>
        </div>
    )
}

export default Home;
