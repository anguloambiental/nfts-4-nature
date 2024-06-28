import styles from "./page.module.css";
import NFTapi from "./nft_api.js"

export default function Home() {
  
  NFTapi("0x6Edcc80f55390E3BEB0E42e3c9d86707BB702BDF").then(ownedNFTS => {
    console.log(ownedNFTS.tokens.pngUrl)
  })
  return (
    <main className={styles.main}>
      <form>
        <input type="text" />
      </form>
    </main>
  );
}
