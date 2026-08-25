import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Shipflow from "./pages/Shipflow";
import Caeses from "./pages/caeses";

import Layout from "./components/layout/Layout";
import ShipflowLoader from "./components/loader/ShipflowLoader";

function App() {
  const [loaderComplete, setLoaderComplete] =
    useState(false);

  return (
    <>
      {!loaderComplete && (
        <ShipflowLoader
          onComplete={() =>
            setLoaderComplete(true)
          }
        />
      )}

      <BrowserRouter>

        <Routes>

          <Route element={<Layout />}>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/shipflow"
              element={<Shipflow />}
            />

            <Route
              path="/caeses"
              element={<Caeses />}
            />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;