import { Routes, Route } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
