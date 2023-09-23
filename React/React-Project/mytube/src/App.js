import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className=" overflow-x-hidden">
        <Head />
        <Body />
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
