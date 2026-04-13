import ClinicalServicesHero from "../components/clinical-services/ClinicalServicesHero";
import ClinicalServicesIntro from "../components/clinical-services/ClinicalServicesIntro";
import ClinicalServicesCareHomes from "../components/clinical-services/ClinicalServicesCareHomes";
import ServicesOverview from "../components/clinical-services/ServicesOverview";

function ClinicalServices() {
  return (
    <>
      <ClinicalServicesHero />
      <ClinicalServicesIntro />
      <ClinicalServicesCareHomes />
      <ServicesOverview />
    </>
  );
}

export default ClinicalServices;