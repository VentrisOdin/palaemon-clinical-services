import HomeHero from "../components/home/HomeHero";
import HomeProblem from "../components/home/HomeProblem";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeIntro from "../components/home/HomeIntro";
import HomeCTA from "../components/home/HomeCTA";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeWhyChoose />
      <HomeIntro />
      <HomeCTA />
    </>
  );
}

export default Home;