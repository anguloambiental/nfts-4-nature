import { useNavigate } from 'react-router-dom';

const RedirectButton = ({label, got_to}) => {
    const navigate = useNavigate()

    function handleRedirect(){
        navigate(got_to)
    }

    return (
        <button className="square-button" onClick={handleRedirect}>
            {label}
        </button>
    )
}

export default RedirectButton;
