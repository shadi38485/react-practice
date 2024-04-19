import React from "react";
import ProductCard from "../ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
  const ProductData = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/41zCaJJmVjL._AC_UF226,226_FMjpg_.jpg",
      title: "mobile",
      price: 1000,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/51HCqfjFNVL._AC_UF226,226_FMjpg_.jpg",
      title: "mobile",
      price: 1000,
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/31oMJ5YcooL._AC_UF226,226_FMjpg_.jpg",
      title: "mobile",
      price: 1000,
    },
  ];
  return (
    <div className="ProductList">
      {ProductData.map((item) => (
        <ProductCard
          key={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
