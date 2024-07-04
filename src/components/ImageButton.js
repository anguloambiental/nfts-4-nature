import { useNavigate } from 'react-router-dom';

const ImageButton = ({label, go_to, img_src}) => {
    const navigate = useNavigate()

    function handleRedirect(){
        navigate(go_to)
    }

    return (
        <div className='image-button' onClick={handleRedirect}>
            <img src={`${process.env.PUBLIC_URL}/${img_src}`} alt={go_to}/>
            <span>{label}</span>
        </div>
    )
}

export default ImageButton;
