import { useState } from "react";

const ProductCard = ({ id, img, title, price }) => {
  const [qty, setQty] = useState(0);
  const Addtobag = () => {
    setQty(qty + 1);
  };

  return (
    <div className="ProductCard">
      <img src={img} alt="" />
      <div className="Product-properties">
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <div>
        <button className="button" onClick={Addtobag}></button>
        <span className="bag">{qty}</span>
      </div>
    </div>
  );
};

export default ProductCard;
