import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Productlist from "./components/ProductsList";
import Footer from "./components/Footer";

function App() {
  const title = "APPLE";
  const explain = "READ ME";
 

  return (
    <>
      <Header title={title}/>
      <Navbar />
      <Productlist />
      <Footer Explain={explain} />
    </>
  );
}
export default App;
