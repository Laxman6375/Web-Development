import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      console.log(posts);
      
    } catch (error) {
      console.log('error aa gya');
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <div>
        {
          loading ? <Spinner /> : 
            posts.length > 0 ? 
              (<div>
                {
                  posts.map((post) =>{
                    return <Product key={post.id} post={post} />;
                })
                }
              </div>): <div>
                <p>NO data found</p>
              </div>
        }
      </div>
    </div>
  );
};

export default Home;
