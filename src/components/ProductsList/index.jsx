import React, {useEffect  ,useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const ProductsList = ({ totallQtyManagment }) => {
 
  const [ProductData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductList">
      {ProductData.map((item) => (
        <ProductCard
          key={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          totallQtyManagment={totallQtyManagment}
        />
      ))}
    </div>
  );
};

export default ProductsList;
