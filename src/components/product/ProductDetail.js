import { useState, useContext, useEffect } from 'react';
import classes from "./ProductList.module.css";
import { AuthContext } from "./../store/auth_context";

const ProductDetails = (props) => {
    let authContext = useContext(AuthContext);

    let itemCountInCart;
    // useEffect(()=> {}, [itemCountInCart]);
    return (
        <div className={classes["modal"]}>
            <div className={classes["modal-content"]}>
                <img
                    className={classes["product-image"]}
                    src={props.selectedProduct.image}
                    alt={props.selectedProduct.title}
                />
                <span className={classes["close"]} onClick={props.closeModal}>
                    &times;
                </span>
                <h2>{props.selectedProduct.title}</h2>
                <p>{props.selectedProduct.description}</p>
                <p>Price: ${props.selectedProduct.price}</p>
                <div className="product-rating">
                    <span className={classes["rating"]}>
                        Rating: {props.selectedProduct.rating.rate}
                    </span>
                    <span className={classes["rating-count"]}>
                        ({props.selectedProduct.rating.count} reviews)
                    </span>
                </div>
                <div className={classes["modal-to-cart"]}>
                    {authContext.isLoggedIn ? (
                        <>
                            <h5>Add to Cart:</h5>
                            <div
                                onClick={()=> props.addToCartHandler(props.selectedProduct)}
                                className={classes["add-to-cart"]}
                            >
                                +
                            </div>
                            <div
                                onClick={()=> props.removeFromCartHandler(props.selectedProduct.id)}
                                className={classes["add-to-cart"]}
                            >
                                -
                            </div>
                        </>
                    ) : (
                        <h4 className={`${classes["blink"]} ${classes["alert"]}`}>
                            Please login to add your choice in the Cart
                        </h4>
                    )}
                </div>
                <div>
                    {props.isBlinking && (
                        <h4 className={classes["blink"]} style={{ color: "lightskyblue" }}>
                            Your choice added to cart
                        </h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
