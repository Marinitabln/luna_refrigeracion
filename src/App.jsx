import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import ServicesFull from "./components/services/ServicesFull";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<ServicesFull />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
