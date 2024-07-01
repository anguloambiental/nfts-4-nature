import { LogIn } from '../nft_api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {

    let [already_logged, setAlreadyLogged] = useState(false)

    const navigate = useNavigate()

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

    return (
        <div className="log-in-container">
            <div className="log-in-title">
                <img className="libelula" src="./images/Libelula.png" alt="libelula" />
                <h1>CEIBA 3.0</h1>
                <img className="libelula" src="./images/Libelula.png" alt="libelula" />
            </div>
            <button className='square-button' onClick={e => logIn()}>Log In</button>
            <button className='square-button' onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default LogInPage;
