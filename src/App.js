import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Profile />
      <Links />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
