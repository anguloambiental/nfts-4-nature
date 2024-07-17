"use client"

import { useRouter } from 'next/navigation'

const ImageButton = ({label, go_to, img_src}) => {
    const router = useRouter()
    function handleRedirect(){
        router.push(go_to)
    }

    return (
        <div className='image-button' onClick={handleRedirect}>
            <img src={`/${img_src}`} alt={go_to}/>
            <span>{label}</span>
        </div>
    )
}

export default ImageButton;
