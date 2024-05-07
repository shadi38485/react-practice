import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {

  const title = "APPLE";
  const explain = "READ ME";
  const [totallQty, settotallQty] = useState(0);
 

  const settotallQtyManagment = () => {
    settotallQty(totallQty + 1);
  };

   
  
  return (
    <BrowserRouter>
      <Header title={title} totallQty={totallQty} />
      <Routes>
        <Route
          path="/"
          element={<HomePage settotallQtyManagment={settotallQtyManagment} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer Explain={explain} />
    </BrowserRouter>
  );
}

export default App;
