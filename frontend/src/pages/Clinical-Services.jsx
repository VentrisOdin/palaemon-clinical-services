import ClinicalServicesHero from "../components/clinical-services/ClinicalServicesHero";
import ClinicalServicesIntro from "../components/clinical-services/ClinicalServicesIntro";
import ServicesOverview from "../components/home/ServicesOverview";

function ClinicalServices() {
  return (
    <>
      <ClinicalServicesHero />
      <ClinicalServicesIntro />
      <ServicesOverview />
    </>
  );
}

export default ClinicalServices;