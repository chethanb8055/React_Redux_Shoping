import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";
import Orderd from "./pages/Orderd";

const App = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orderd" element={<Orderd/>}/>
        
      </Routes>
    </>
  );
};

export default App;
