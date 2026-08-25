import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Shipflow from "./pages/Shipflow";
import Caeses from "./pages/Caeses";

import Layout from "./components/layout/Layout";
import ShipflowLoader from "./components/loader/ShipflowLoader";
import SimpleLoader from "./components/loader/SimpleLoader";

const INTRO_KEY = "sandeb-marine-intro-seen";
import NotFound from "./pages/Marine404";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    const seen = sessionStorage.getItem(INTRO_KEY) === "1";
    return !seen && window.location.pathname === "/";
  });

  const [routeLoading, setRouteLoading] = useState(false);

  // Simple loader on in-app route changes (not first Home intro)
  useEffect(() => {
    if (showIntro) return;

    setRouteLoading(true);
    const t = setTimeout(() => setRouteLoading(false), 700);
    return () => clearTimeout(t);
  }, [location.pathname, showIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && (
        <ShipflowLoader onComplete={handleIntroComplete} />
      )}

      {!showIntro && routeLoading && <SimpleLoader />}

      <div
        className={
          showIntro || routeLoading
            ? "pointer-events-none opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shipflow" element={<Shipflow />} />
            <Route path="/caeses" element={<Caeses />} />
            <Route path="/*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;