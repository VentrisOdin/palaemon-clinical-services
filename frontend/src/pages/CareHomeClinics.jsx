import { Helmet } from "react-helmet-async";

import CareHomeClinicsHero from "../components/careHomeClinics/CareHomeClinicsHero";
import CareHomeClinicsIntro from "../components/careHomeClinics/CareHomeClinicsIntro";
import CareHomeClinicsProcess from "../components/careHomeClinics/CareHomeClinicsProcess";
import CareHomeClinicsPricing from "../components/careHomeClinics/CareHomeClinicsPricing";
import CareHomeClinicsStandards from "../components/careHomeClinics/CareHomeClinicsStandards";
import CareHomeClinicsFuture from "../components/careHomeClinics/CareHomeClinicsFuture";

function CareHomeClinics() {
  return (
    <>
      <Helmet>
        <title>Care Home Microsuction Clinic Days | Palaemon Ear Care</title>
        <meta
          name="description"
          content="On-site microsuction clinic days for care homes, residential settings and supported living environments."
        />
      </Helmet>

      <CareHomeClinicsHero />
      <CareHomeClinicsIntro />
      <CareHomeClinicsProcess />
      <CareHomeClinicsPricing />
      <CareHomeClinicsStandards />
      <CareHomeClinicsFuture />
    </>
  );
}

export default CareHomeClinics;