import { getData, claimNFT } from '../nft_api';

const MintNFT = () => {
    return (
        <div className="log-in-container">
            <h1>GET THIS NFT</h1>
            <h3>IZTAPALAPA</h3>
            <butotn onClick={claimNFT()}>Mint NFT</butotn>
        </div>
    )
}

export default MintNFT;
