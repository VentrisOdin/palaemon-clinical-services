import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/home/Hero";
import WhyChoose from "./components/home/WhyChoose";
import SplashScreen from "./components/layout/SplashScreen";

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
    <MainLayout>
      <Hero />
      <WhyChoose />
    </MainLayout>
  );
}

export default App;