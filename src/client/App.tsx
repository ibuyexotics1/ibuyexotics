import { Homepage } from "./pages/Homepage";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./utils/styles/global/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToAnchor from "./utils/scroll/ScrollToAnchor";

function App() {
  ScrollToAnchor()

  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
