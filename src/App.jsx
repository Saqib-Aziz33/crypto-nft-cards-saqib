import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// layout
import Base from "./components/layout/Base";
// pages
import { Home, NotFound } from "./pages";
import CryptoInfo from "./pages/CryptoInfo";
// others
import "./app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Base>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/crypto/:id" element={<CryptoInfo />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Base>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
