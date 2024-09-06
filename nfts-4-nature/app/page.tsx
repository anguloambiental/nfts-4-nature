"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LogIn } from './nft_api'

declare var window: any

const LogInPage = () => {

    let message: void | string
    const router = useRouter()
    async function signUp(){
        const accepted = await LogIn()
        if (accepted != 1) {
            window.location = 'https://metamask.app.link/dapp/ceiba3.org';
        }else{
            router.push('/Maps')
        }
        console.log(message)
    }

    async function bandoo(){
        const accepted = await LogIn()
        if (accepted != 1) {
            window.location = 'https://bando.cool';
        }else{
            router.push('/Maps')
        }
        console.log(message)
    }

    function noWallet(){
        router.push('/NoWallet')
    }

    const height = {
        "height": "100%"
    }

    return (
        <div className='main-cont' style={height}>
            <div className="log-in-container">
                <div className="log-in-title row-cont">
                    <h1 className='title'>CEIBA 3.0</h1>
                </div>
                <div className="login-image column-cont">
                    <Image src="/images/Main.png" alt="libelula" width={400} height={400}/>
                    <h3 className='title'>NFTS FOR NATURE</h3>
                </div>
                <div className='space-around-cont buttons-cont'>
                    <button className='square-button' onClick={signUp}>Connect Metamask Wallet</button>
                    <button className='square-button' onClick={bandoo}>Connect Bandoo Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;
