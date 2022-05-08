import { useEffect, useRef } from "react";

import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

function App() {
  const monitorEffect = useRef(false);

  useEffect(() => {
    if (monitorEffect.current) {
      return;
    }
    monitorEffect.current = true;
    // your code
  }, []);

  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTS. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange and earn crypto. Join 25+ million people using ProNef MArketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way o showcase the store"
        description="The app contains two screens. The first screen lists all NFTs, while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Javascript Mastery</span>
        </p>
      </div>
    </>
  );
}

export default App;
