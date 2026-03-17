import { BrowserRouter, Routes, Route } from "react-router-dom";
import IDMeNaija from "./pages";
import { Preloader } from "./components/Preloader";
import { scriptsReady } from "./utils/bootstrap";
import { ComingSoon } from "./components/ComingSooon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing waits for all CDN scripts + min 1.4s */}
        <Route
          path="/"
          element={
            <Preloader minDuration={1400} waitFor={[scriptsReady]}>
              <IDMeNaija />
            </Preloader>
          }
        />

        {/* Catch-all coming soon no scripts to wait for, just min 900ms */}
        <Route
          path="*"
          element={
            <Preloader minDuration={1000}>
              <ComingSoon />
            </Preloader>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;