import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pageination from "./components/Pageination";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const { fetchBlogPosts, darkMode } = useContext(AppContext);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className={`${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    } w-full h-full flex flex-col gap-y-1 justify-center items-center`}>
      <Header />
      <Blogs />
      <Pageination/>
    </div>
  );
}
