"use client"

import { useRouter } from 'next/navigation'
import { LogIn } from '../nft_api'
import Image from 'next/image'

declare var window: any

const LogInPage = () => {

    let message: void | string
    const router = useRouter()
    async function signUp(){
        const accepted = await LogIn()
        if (accepted != 1) {
            // message = accepted == 0 ? router.push('/NoWallet') : 'Rejected'
            window.location = 'https://metamask.app.link/dapp/ceiba3.org';
        }else{
            router.push('/Maps')
        }
        console.log(message)
    }

    function noWallet(){
        router.push('/NoWallet')
    }

    return (
        <div className='main-cont'>
            <div className="log-in-container">
                <div className="log-in-title row-cont">
                    <h1 className='title'>CEIBA 3.0</h1>
                </div>
                <div className="login-image column-cont">
                    <Image src="/images/Main.png" alt="libelula" width={500} height={300}/>
                    <h3 className='title'>NFTS FOR NATURE</h3>
                </div>
                <div className='space-around-cont buttons-cont'>
                    <button className='square-button' onClick={signUp}>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;
