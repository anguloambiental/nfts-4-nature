import { useRouter } from "next/navigation";
import Image from "next/image";

type props = {
    token: number
}

export default function NFTthumbnail({ token }: props){
    const router = useRouter();
    try{
        const metadata = require(`@/metadata_nft_prod/${token}.json`);
        return (
        <div>
            <Image src={`/images/thumbnails/${token}.png`} alt="nft sneakpick" 
            className='image-button' width={500} height={300}
            onClick={() => router.push(`/mint/${token}`)} />
            <h3>{metadata.name}</h3>
            <h5>{metadata.attributes[0].value}</h5>
        </div>
        );
    }catch{
        <></>
    }
}