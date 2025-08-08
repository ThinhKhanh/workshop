import React from "react";
import { useOne } from "../../../hooks/useOne";
import { useParams } from "react-router-dom";

const ProductEditPage = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useOne("products", id);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log(data);
    return <div>ProductEditPage</div>;
};

export default ProductEditPage;
