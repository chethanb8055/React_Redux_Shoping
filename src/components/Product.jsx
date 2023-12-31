import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
// import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    // toast.success("item added to Cart")
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    // toast.success("item remove from cart")
  };
  return (
    <div className="flex flex-col items-center justify-between  hover:scale-110 transition duration-300 ease-in hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[150px]">
        <img src={`${post.image}`} alt="img-4" className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-14">
        <div>
          <p className="text-green-600 font-semibold items-center w-full">$ {post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
          className="text-gray-700 border-2 border-gray-600 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700  hover:text-white transition duration-300 ease-in "
          onClick={removeFromCart}>Remove items</button>
        ) : (
          <button onClick={addToCart}
            className="text-gray-700 border-2 border-gray-600 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700  hover:text-white transition duration-300 ease-in "
          >Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
