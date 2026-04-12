import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import SplashScreen from "./components/layout/SplashScreen";
import Home from "./pages/Home";
import EarCare from "./pages/EarCare";
import ClinicalServices from "./pages/Clinical-Services";
import BookingPage from "./pages/BookingPage";
import Microsuction from "./pages/Microsuction";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";

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
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ear-care" element={<EarCare />} />
          <Route path="/clinical-services" element={<ClinicalServices />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/microsuction" element={<Microsuction />} />
          <Route path="/" element={<Home />} />
          <Route path="/ear-care" element={<EarCare />} />
          <Route path="/clinical-services" element={<ClinicalServices />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/microsuction" element={<Microsuction />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;