import React from 'react';

const ProductDetail = () => {
    const {productId} = useParams();
    console.log(productId);
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => setProduct(json));
    }, [productId]);
    

    return (
        <div>
            <h1>Product Detail Page</h1>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductDetail;