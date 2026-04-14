import MicrosuctionHero from "../components/microsuction/MicrosuctionHero";
import MicrosuctionExplainer from "../components/microsuction/MicrosuctionExplainer";
import MicrosuctionProcess from "../components/microsuction/MicrosuctionProcess";
import MicrosuctionSuitability from "../components/microsuction/MicrosuctionSuitability";
import MicrosuctionPreparation from "../components/microsuction/MicrosuctionPreparation";
import MicrosuctionCTA from "../components/microsuction/MicrosuctionCTA";

function Microsuction() {
  return (
    <>
      <MicrosuctionHero />
      <MicrosuctionExplainer />
      <MicrosuctionProcess />
      <MicrosuctionSuitability />
      <MicrosuctionPreparation />
      <MicrosuctionCTA />
    </>
  );
}

export default Microsuction;