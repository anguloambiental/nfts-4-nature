"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const LogInPage = () => {
    const router = useRouter()

    return (
        <div className='main-cont log-in-container row-cont'>
            <Image src="/images/Main.png" alt="Ceiba Logo" width={500} height={300}/>
            <div className="column-cont">
                <h1 className='title'>CEIBA 3.0</h1>
                <h3 className='title'>NFTS FOR NATURE</h3>
                <button className='square-button' onClick={() => router.push('/en/about')}>Start</button>
            </div>
        </div>
    )
}

export default LogInPage;
