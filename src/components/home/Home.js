import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import ProductList from "../product/ProductList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  let text = isLoading ? "Availavle products are loading, please wait..." : "";
  // const loadedProducts = [
  //   {
  //     category: "men's clothing",
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     id: 1,
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     price: 109.95,
  //     rating: { rate: 3.9, count: 120 },
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   },
  // ];
  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className={classes.home}>
      <ProductList items={allProducts} text={text} />
      {/* <ProductList items={loadedProducts} /> */}
    </div>
  );
};

export default Home;
