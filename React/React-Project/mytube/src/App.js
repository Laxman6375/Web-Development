import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/Store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

function App() {
  return (
    <Provider store={store}>
      <div className=" overflow-x-hidden">
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="demo" element={<Demo />} />
          </Route>
        </Routes>
        {/* 
        -Head
        -Body
        -Sidebar
          MenuItems
        -MainContainer
          ButtonList
          VideoContainer
            VideoCard
       */}
      </div>
    </Provider>
  );
}

export default App;
