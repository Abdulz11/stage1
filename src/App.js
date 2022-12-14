import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FooterLogos from "./components/FooterLogos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <FooterLogos />
      </BrowserRouter>
    </div>
  );
}

export default App;
