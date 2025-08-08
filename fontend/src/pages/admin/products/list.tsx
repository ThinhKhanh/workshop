/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useList } from "../../../hooks/useList";

const ProductListPage = () => {
    const { data, isLoading, error } = useList("products");
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
            {data?.data.map((product: any) => (
                <div key={product.id}>
                    <h2><Link to={`/products/${product.id}/edit`}>{product.name}</Link></h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductListPage;
