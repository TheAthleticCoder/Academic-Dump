import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Register from "./components/common/Register";
import Login from "./components/common/Login";
import Navbar from "./components/templates/Navbar";
import BuyerNav from "./components/buyer/BuyerNav";
import BuyerOrder from "./components/buyer/BuyerOrder";
import BuyerProfile from "./components/buyer/BuyerProfile";
import BuyerWallet from "./components/buyer/BuyerWallet";
import BuyerDashboard from "./components/buyer/BuyerDashboard";
import VendNav from "./components/vendor/VendorNav";
import VendProfile from "./components/vendor/VendorProfile";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const BuyNavBarLayout = () => {
  return (
    <div>
      <BuyerNav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const VendNavBarLayout = () => {
  return (
    <div>
      <VendNav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/buyer" element={<BuyNavBarLayout />}>
          <Route path="/buyer/profile" element={<BuyerProfile />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/wallet" element={<BuyerWallet />} />
          <Route path="/buyer/order" element={<BuyerOrder />} />
        </Route>
        <Route path="/vendor" element={<VendNavBarLayout />}>
          <Route path="/vendor/profile" element={<VendProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
