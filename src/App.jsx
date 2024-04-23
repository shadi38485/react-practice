import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Productlist from "./components/ProductsList";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css"


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
