import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import LoginPage from "./Pages/Loginpage";

function App() {

  const title = "APPLE";
  const explain = "READ ME";
  const [totallQty, setTotallQty] = useState(0);
 

  const totallQtyManagment = () => {
    setTotallQty(totallQty + 1);
  };

   
  
  return (
    <BrowserRouter>
      <Header title={title} totallQty={totallQty} />
      <Routes>
        <Route
          path="/"
          element={<HomePage totallQtyManagment={totallQtyManagment} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/404" element={<h1>404</h1>} />
      </Routes>
      <Footer Explain={explain} />
    </BrowserRouter>
  );
}

export default App;
