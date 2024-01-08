import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/page-1" element={<PageOne />} />
          <Route path="/page-2" element={<PageTwo />} />
          <Route path="/page-3" element={<PageThree />} />
          <Route path="/page-4" element={<PageFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
