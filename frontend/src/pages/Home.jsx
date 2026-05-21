import HomeHero from "../components/home/HomeHero";
import HomeProblem from "../components/home/HomeProblem";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeIntro from "../components/home/HomeIntro";
import HomeCareHomeClinics from "../components/home/HomeCareHomeClinics";
import HomeCTA from "../components/home/HomeCTA";
import HomeLaunchOffer from "../components/home/HomeLaunchOffer";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeLaunchOffer />
      <HomeProblem />
      <HomeWhyChoose />
      <HomeIntro />
      <HomeCareHomeClinics />
      <HomeCTA />
    </>
  );
}

export default Home;