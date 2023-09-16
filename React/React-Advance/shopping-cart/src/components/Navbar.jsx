import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img width={50} height={50} alt="hello" src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg?size=626&ext=jpg&ga=GA1.2.892729321.1686487056&semt=ais" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
