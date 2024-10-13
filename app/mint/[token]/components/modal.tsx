type props = {
    title: string,
    message: string,
    wallet?: boolean,
    error?: boolean
}

function WalletModal(){
    const button = {
        "display": "block",
        "margin": "2% 0"
    }
    return (
        <div className="wallet-modal">
            <a style={button} href="https://go.cb-w.com/dapp?cb_url=https%3A%2F%2Fceiba3.org" className='square-button'>COINBASE</a>
            <a style={button} href="https://metamask.app.link/dapp/ceiba3.org" className='square-button'>METAMASK</a>
        </div>
    )
}

function NormalModal({ title, message }: props){
    return (
        <div className="normal-modal">
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}

function ErrorModal({ title, message }: props){
    return (
        <div className="error-modal">
            <h1>Error {title}</h1>
            <p>{message}</p>
        </div>
    )
}

export default function Modal({ title, message, wallet, error }: props){
    return (
        <div>
            { wallet ? <WalletModal />
            : error ? <ErrorModal title="Error" message="Mensaje Error" />
            : <NormalModal title="Normal" message="Mensaje Normal" />}
        </div>
    )
}