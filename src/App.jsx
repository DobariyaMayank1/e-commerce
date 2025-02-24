import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import CartProvider from "./context/CartContext"; 

const App = () => {
    return (
        <CartProvider> 
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;

