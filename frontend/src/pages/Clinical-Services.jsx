import { Helmet } from "react-helmet-async";

import ClinicalServicesHero from "../components/clinicalServices/ClinicalServicesHero";
import ClinicalServicesProblem from "../components/clinicalServices/ClinicalServicesProblem";
import ClinicalServicesModel from "../components/clinicalServices/ClinicalServicesModel";
import ClinicalServicesPrinciples from "../components/clinicalServices/ClinicalServicesPrinciples";
import ClinicalServicesScreening from "../components/clinicalServices/ClinicalServicesScreening";
import ClinicalServicesBridge from "../components/clinicalServices/ClinicalServicesBridge";
import ClinicalServicesGovernance from "../components/clinicalServices/ClinicalServicesGovernance";
import ClinicalServicesCTA from "../components/clinicalServices/ClinicalServicesCTA";

function ClinicalServices() {
  return (
    <>
      <Helmet>
        <title>
          Care Home Clinical Support | Palaemon Clinical Services
        </title>

        <meta
          name="description"
          content="Palaemon Clinical Services is developing structured paramedic-led support for care settings, focused on regular resident screening, clinical observations and communication with existing healthcare providers."
        />
      </Helmet>

      <ClinicalServicesHero />

      <ClinicalServicesProblem />

      <ClinicalServicesModel />

      <ClinicalServicesPrinciples />

      <ClinicalServicesScreening />

      <ClinicalServicesBridge />

      <ClinicalServicesGovernance />

      <ClinicalServicesCTA />
    </>
  );
}

export default ClinicalServices;