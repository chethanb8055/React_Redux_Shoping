// import img from "."
import { BiSolidCartAlt } from "react-icons/bi";
import img from "./starbucks-logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <nav>
      <div className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={img} alt="img-2" className="w-10" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <BiSolidCartAlt className="text-2xl" />
              {
                cart.length>0 &&
                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"
                >{cart.length}</span>
              }
            </div>
          </NavLink>
          {/* <Link to="/">Home</Link>   */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
