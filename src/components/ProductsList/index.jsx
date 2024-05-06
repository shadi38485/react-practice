import React, {useEffect  ,useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const ProductsList = ({ settotallQtyManagment }) => {
  // const ProductData = [
  //   {
  //     id: 1,
  //     image:
  //       "https://m.media-amazon.com/images/I/41zCaJJmVjL._AC_UF226,226_FMjpg_.jpg",
  //     title: "mobile",
  //     price: 1000,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://m.media-amazon.com/images/I/51HCqfjFNVL._AC_UF226,226_FMjpg_.jpg",
  //     title: "mobile",
  //     price: 1000,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://m.media-amazon.com/images/I/31oMJ5YcooL._AC_UF226,226_FMjpg_.jpg",
  //     title: "mobile",
  //     price: 1000,
  //   },
  // ];
  const [ProductData, setProductsData
  ] = useState([]);

  
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
          settotallQtyManagment={settotallQtyManagment}
        />
      ))}
    </div>
  );
};

export default ProductsList;
