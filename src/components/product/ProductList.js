import React, { useEffect } from "react";
import classes from "./ProductList.module.css"; // CSS file for styling
import Product from "./Product";
import { useState, useContext } from "react";
import Backdrop from "../../Layout/Backdrop";
import { AuthContext } from "./../store/auth_context";
import CartContext from "../store/cart_context";
import Swal from "sweetalert2";
import ProductDetails from "./ProductDetail";

const ProductList = (props) => {
    let authContext = useContext(AuthContext);
    let cartCtx = useContext(CartContext);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductAmount, setSelectedProductAmount] = useState(null);
    const [isBlinking, setIsBlinking] = useState(false);

    const productDetailsModal = (id) => {
        let selectedProductById = props.items.find((product) => product.id === id);
        setSelectedProduct(selectedProductById);
        console.log(selectedProductById);
    };

    const closeModal = (e) => {
        setSelectedProduct(null);
        setSelectedProductAmount(null);
    };

    const addToCartHandler = (product) => {
        cartCtx.addItem({ ...product, amount: 1 });
        setIsBlinking(true);
        setTimeout(() => {
            setIsBlinking(false);
        }, 2000);
    };

    const removeFromCartHandler = (id) => {
        let hasAnyItemInCart = cartCtx.items.some(
            (item) => item.id === id
        );
        if (hasAnyItemInCart) {
            cartCtx.removeItem(id);
            setIsBlinking(true);
            setTimeout(() => {
                setIsBlinking(false);
            }, 2000);
        } else {
            Swal.fire({
                icon: "info",
                title: "Oops...",
                fontWeight: "bold",
                color: "cadetblue",
                html: `No <b>"${selectedProduct.title}"</b> is in your cart`,
            });
        }
    };

    // useEffect(()=> {

    // }, [selectedProductAmount])

    return (
        <>
            <div className={classes["product-list-container"]}>
                <h2>Product List: {props.text}</h2>
                <ul className={classes["product-list"]}>
                    {props.items.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating.rate}
                            reviews={product.rating.count}
                            image={product.image}
                            onClick={productDetailsModal}
                        />
                    ))}
                </ul>
            </div>

            {selectedProduct && <Backdrop onClick={closeModal} />}
            {/* {selectedProduct &&
                <div className={classes["modal"]}>
                    <div className={classes["modal-content"]}>
                        <img className={classes["product-image"]} src={selectedProduct.image} alt={selectedProduct.title} />
                        <span className={classes["close"]} onClick={closeModal}>&times;</span>
                        <h2>{selectedProduct.title}</h2>
                        <p>{selectedProduct.description}</p>
                        <p>Price: ${selectedProduct.price}</p>
                        <div className="product-rating">
                            <span className={classes["rating"]}>Rating: {selectedProduct.rating.rate}</span>
                            <span className={classes["rating-count"]}>({selectedProduct.rating.count} reviews)</span>
                        </div>
                        <div className={classes['modal-to-cart']}>
                            {(authContext.isLoggedIn) ? (
                                <>
                                    <div>{(selectedProductAmount > 0)? `${selectedProductAmount}  ${selectedProduct.title} are in your cart` : ''}</div>
                                    <h5>Add to Cart:</h5>
                                    <div onClick={addToCartHandler} className={classes['add-to-cart']}>+</div>
                                    <div onClick={removeFromCartHandler} className={classes['add-to-cart']}>-</div>
                                </>
                            ) : (<h4 className={`${classes['blink']} ${classes['alert']}`}>Please login to add your choice in the Cart</h4>)}

                        </div>
                        <div>
                            {(isBlinking) &&
                                <h4 className={classes['blink']} style={{ color: 'lightskyblue' }}>Your choice added to cart</h4>}
                        </div>
                    </div>
                </div>
            } */}
            {selectedProduct && (
                <ProductDetails
                    selectedProduct={selectedProduct}
                    closeModal={closeModal}
                    addToCartHandler={addToCartHandler}
                    removeFromCartHandler={removeFromCartHandler}
                    selectedProductAmount={selectedProductAmount}
                    isBlinking={isBlinking}
                />
            )}
        </>
    );
};

export default ProductList;
