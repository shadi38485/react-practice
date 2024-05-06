import Navbar from "./components/Navbar/Navbar";
import Productlist from "./components/ProductsList";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



function App() {
  const title = "APPLE";
  const explain = "READ ME";
  const [totallQty,settotallQty] = useState(0);
  const settotallQtyManagment = () => {
    settotallQty(totallQty + 1)
  } ;

  return (
    <>
      <Header title={title} totallQty={totallQty} />
      <Navbar />
      <Productlist settotallQtyManagment={settotallQtyManagment} />
      <Footer Explain={explain} />
      
    </>
  );
}
export default App;
