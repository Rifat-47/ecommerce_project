import Header from "../components/common/Header";
import Footer from "./../components/common/Footer";
import classes from "./Layout.module.css";
import {useState} from "react";
import Cart from "../components/cart/Cart";
const Layout = (props) => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    };

    const closeCartHandler = () => {
        setShowCart(false);
    };

    return (
        <div>
            {showCart && <Cart onClose={closeCartHandler} />}
            <Header onClick={showCartHandler} />
            <div className={classes.middle_section}>
            {props.children}
            </div>
            <Footer />
        </div>
    )
};

export default Layout;