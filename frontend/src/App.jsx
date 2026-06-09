import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import SplashScreen from "./components/layout/SplashScreen";
import ScrollToTop from "./components/utils/ScrollToTop";

import Home from "./pages/Home";
import EarCare from "./pages/EarCare";
import ClinicalServices from "./pages/Clinical-Services";
import BookingPage from "./pages/BookingPage";
import BookingConfirmed from "./pages/BookingConfirmed";
import Microsuction from "./pages/Microsuction";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import CareHomeSupport from "./pages/CareHomeSupport";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import CancellationPage from "./pages/CancellationPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import InsurancePage from "./pages/InsurancePage";
import CareHomeClinics from "./pages/CareHomeClinics";

import ServiceArea from "./pages/ServiceArea";
import ServiceAreaHampshire from "./pages/ServiceAreaHampshire";
import ServiceAreaSurrey from "./pages/ServiceAreaSurrey";
import EarWaxRemovalPortsmouth from "./pages/EarWaxRemovalPortsmouth";
import EarWaxRemovalGuildford from "./pages/EarWaxRemovalGuildford";
import EarWaxRemovalPetersfield from "./pages/EarWaxRemovalPetersfield";
import ClinicianPortal from "./pages/ClinicianPortal";
import QrLandingPage from "./pages/QrLandingPage/QrLandingPage";
import DemoPortal from "./pages/DemoPortal";
import NoEarWaxPage from "./pages/NoEarWaxPage";


function AppRoutes() {
  const location = useLocation();

  const isStandalonePage =
    location.pathname === "/book-now" ||
    location.pathname === "/booking-confirmed";

  if (isStandalonePage) {
    return (
      <Routes>
        <Route path="/book-now" element={<QrLandingPage />} />
        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
       
      </Routes>
    );
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ear-care" element={<EarCare />} />
        <Route path="/clinical-services" element={<ClinicalServices />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/microsuction" element={<Microsuction />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/care-home-support" element={<CareHomeSupport />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cancellation" element={<CancellationPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />

        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/service-area-hampshire" element={<ServiceAreaHampshire />} />
        <Route path="/service-area-surrey" element={<ServiceAreaSurrey />} />
        <Route path="/ear-wax-removal-portsmouth" element={<EarWaxRemovalPortsmouth />} />
        <Route path="/ear-wax-removal-guildford" element={<EarWaxRemovalGuildford />} />
        <Route path="/ear-wax-removal-petersfield" element={<EarWaxRemovalPetersfield />} /> 
        <Route path="/care-home-clinics" element={<CareHomeClinics />} />
        <Route path="/clinician" element={<ClinicianPortal />} />
        <Route path="/demo" element={<DemoPortal />} />
        <Route path="/what-if-it-isnt-ear-wax" element={<NoEarWaxPage />}
/>
      </Routes>
    </MainLayout>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;