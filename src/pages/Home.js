import RedirectButton from '../components/RedirectButton';
import ImageButton from '../components/RedirectButton'

const Home = () => {

    return (
        <div className="log-in-container">
            <RedirectButton 
                label='About'
                got_to='/login'
            />
            <ImageButton 
                label='Profile'
                got_to='/login'
                img_src='./images/Libelula.png'
            />
            <ImageButton 
                label='Maps'
                got_to='/maps'
                img_src='./images/Libelula.png'
            />
            <ImageButton 
                label='Artist'
                got_to='/login'
                img_src='./images/Libelula.png'
            />
        </div>
    )
}

export default Home;
