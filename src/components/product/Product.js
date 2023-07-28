import { useState } from "react";
import classes from "./Product.module.css";

const Product = (props) => {
    const { id, title, price, rating, reviews, image } = props;
    const openDetailsHandler = () => {
        props.onClick(id);
    };
    return (
        <>
            <li key={id} className={classes["product-item"]} onClick={openDetailsHandler}>
                <img className={classes["product-image"]} src={image} alt={title} />
                <div className={classes["product-details"]}>
                    <h3 className={classes["product-title"]}>{title}</h3>
                    <p className={classes["product-price"]}>${price}</p>
                    {/* <p className={classes["product-description"]}>{product.description}</p> */}
                    <div className={classes["product-rating"]}>
                        <span className={classes["rating"]}>Rating: {rating.rate}</span>
                        <span className={classes["rating-count"]}>({rating.count} reviews)</span>
                    </div>
                </div>
            </li>
        </>
    )
};

export default Product;