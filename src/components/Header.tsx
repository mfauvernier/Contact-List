import "./Header.css";
import { LuAtom } from "react-icons/lu";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <LuAtom size={30} />
        <p className="header-title">Contact List</p>
      </div>

      <div className="header-menu">
        <p>Pricing</p>
        <p>Product</p>
        <p>Features</p>
        <p>Marketplace</p>
      </div>
    </div>
  );
}

export default Header;
