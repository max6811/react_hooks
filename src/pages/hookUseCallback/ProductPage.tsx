import { FC, useCallback } from "react";

import ShippingForm from "./ShippingForm";
import { OrederDetail, Product } from "../../types/Product";

import "./ProductPage.css";

type ProductPageProps = {
    productId: string;
    referrer: string;
    theme: string;
};

const ProductPage: FC<ProductPageProps> = ({ productId, referrer, theme }) => {
    const handleSubmit = useCallback(
        (orderDetails: OrederDetail) => {
            console.log(referrer);
            post("product" + productId + "/buy", { referrer, orderDetails });
        },
        [productId, referrer]
    );
    const handleSubmit1 = (orderDetails: OrederDetail) => {
        console.log("referrer: ", referrer);
        post("product" + productId + "/buy", { referrer, orderDetails });
    };

    return (
        <div className={theme}>
            <h1>Products</h1>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
};
export default ProductPage;

const post = (path: string, data: Product) => {
    console.log("POST/" + path);
    console.log("data: ", data);
};
