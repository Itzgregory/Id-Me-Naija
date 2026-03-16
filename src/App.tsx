import { BrowserRouter, Routes, Route } from "react-router-dom";
import IDMeNaija from "./pages";
import { ComingSoon } from "./components/ComingSooon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<IDMeNaija />} />

        {/* Catch-all — renders Coming Soon for any unknown route */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;