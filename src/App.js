import { Routes, Route, Link } from "react-router-dom";
// import './App.css';
import Welcome from "./components/home/Welcome";
import HomePage from './Pages/HomePage';
import Layout from "./Layout/Layout";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import CartProvider from "./components/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/register" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
