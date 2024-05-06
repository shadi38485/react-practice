import { useEffect, useState } from "react";

const ProductCard = ({ id, img, title, price, settotallQtyManagment }) => {
  const [qty, setQty] = useState(0);

  const Addtobag = () => {
    setQty(qty + 1);
    settotallQtyManagment();
  };

  return (
    <div className="ProductCard">
      <img src={img} alt="" />
      <div className="Product-properties">
        <p>{title}</p>
        <p>{price}$</p>
      </div>
      <div className="footer-card">
        <button className="button" onClick={Addtobag}>
          Add to bag
        </button>
        {qty ? <span className="bag">{qty}</span>:""}
      </div>
    </div>
  );
};

export default ProductCard;


   {
     /* <span className="bag">{qty === 0 ? "" : qty}</span> */
   }
   {
     /* <span className="bag">{!qty ? "" : qty}</span> */
   }
   {
     /* <span className="bag">{qty ? qty : ""}</span> */
   }
   {
     /* <span className="bag">{qty && qty}</span> */
   }

   {
     /* {qty ? <span className="bag">{qty}</span> : ""} */
   }