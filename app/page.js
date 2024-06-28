import styles from "./page.module.css";
import NFTapi from "./nft_api.js"

export default async function Home() {
  
  let ownedNFTS = await NFTapi("0x6Edcc80f55390E3BEB0E42e3c9d86707BB702BDF")

  console.log(ownedNFTS.tokens[3].image.pngUrl)
  return (
    <main className={styles.main}>
      <form>
        <input type="text" />
        <img src={ownedNFTS.tokens[2].image.pngUrl} />
        <img src={ownedNFTS.tokens[3].image.pngUrl} />
      </form>
    </main>
  );
}
