// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Prolog from "./page/Prolog";
import Test from "./page/Test";
// import store from "./redux/store";

function App() {
  console.log(1);
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prolog />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
