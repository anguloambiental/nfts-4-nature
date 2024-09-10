"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ImageButton = ({label, go_to, img_src}) => {
    const router = useRouter()
    function handleRedirect(){
        router.push(go_to)
    }

    return (
        <div className='image-button' onClick={handleRedirect}>
            <Image src={`/${img_src}`} alt={go_to} width={500} height={300}/>
            <span>{label}</span>
        </div>
    )
}

export default ImageButton;
