import { useNavigate } from 'react-router-dom';

const ImageButton = ({label, got_to, img_src}) => {
    const navigate = useNavigate()

    function handleRedirect(){
        navigate(got_to)
    }

    return (
        <div className='image-button' onClick={handleRedirect}>
            <img src={img_src} />
            <span>{label}</span>
        </div>
    )
}

export default ImageButton;
