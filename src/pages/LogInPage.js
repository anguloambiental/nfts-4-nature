import { LogIn } from '../nft_api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {

    let [already_logged, setAlreadyLogged] = useState(false)

    const navigate = useNavigate()

    console.log(already_logged)

    function logIn(){
        if (!already_logged){
            LogIn().then(logged => {
                console.log(logged, already_logged)
              if (logged){
                setAlreadyLogged(true)
                navigate('/home')
              }else console.log('AlreadyLogged')
            })
          }
    }

    function signUp(){
        console.log('redirect to sign up page')
    }

    let libelula = process.env.PUBLIC_URL + "/images/Libelula.png"
    let main = process.env.PUBLIC_URL + "/images/Main.png"
    let invert = { "transform": "scaleX(-1)" }

    return (
        <div className='main-cont'>
            <div className="log-in-container">
                <div className="log-in-title row-cont">
                    <img src={libelula} style={invert} alt="libelula" />
                    <h1 className='title'>CEIBA 3.0</h1>
                    <img src={libelula} alt="libelula" />
                </div>
                <div className="login-image column-cont">
                    <img src={main} alt="libelula" />
                    <h3 className='title'>NFTS FOR NATURE</h3>
                </div>
                <div className='space-around-cont buttons-cont'>
                    <button className='square-button' onClick={e => logIn()}>Log In</button>
                    <button className='square-button' onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;
