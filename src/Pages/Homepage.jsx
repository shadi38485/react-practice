 import React from 'react'
 import ProductsList from '../components/ProductsList';

 const HomePage = ({ totallQtyManagment }) => {

   return (
     <div>
       <ProductsList totallQtyManagment={totallQtyManagment}></ProductsList>
     </div>
   );
 };

export default HomePage