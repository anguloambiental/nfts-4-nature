"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Gallery = () => {
    const router = useRouter()

    return (
        <div className='main-cont'>
            <div className="gallery-header row-cont">
                <Image src="/images/Libelula.png" alt="libelula" width={500} height={300}/>
                <h2 className='title'>Browse NFTs for Impact</h2>
                <Image src="/images/Libelula.png" alt="libelula" width={500} height={300}/>
            </div>
            <div className="gallery-body space-around">
                <Image src="/images/artworks/0.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/0`)}/>
                <Image src="/images/artworks/1.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/1`)}/>
                <Image src="/images/artworks/2.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/2`)}/>
                <Image src="/images/artworks/3.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/3`)}/>
                <Image src="/images/artworks/4.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/4`)}/>
                <Image src="/images/artworks/5.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/5`)}/>
                <Image src="/images/artworks/6.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/6`)}/>
                <Image src="/images/artworks/7.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/7`)}/>
                <Image src="/images/artworks/8.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/8`)}/>
                <Image src="/images/artworks/9.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/9`)}/>
                <Image src="/images/artworks/10.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/10`)}/>
                <Image src="/images/artworks/11.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/11`)}/>
                <Image src="/images/artworks/12.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/12`)}/>
                <Image src="/images/artworks/13.png" alt="nft sneakpick" 
                className='image-button' width={500} height={300}
                onClick={() => router.push(`/en/mint/13`)}/>
            </div>
        </div>
    )
}

export default Gallery;
