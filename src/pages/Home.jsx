import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"; // Import your Product component here

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false); // Set an initial value for loading
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log(err.detail, err);
      setPost([]);
      setLoading(false); // Set loading to false even in case of an error
    }
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-4 min-h-[80vh]">
          {post.map((item) => (
            <Product key={item.id} post={item} /> // Pass individual 'item' to Product component
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
             <p>data not found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
