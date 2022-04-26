import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AsideContent from "./pages/Aside/AsideContent";
import Contacto from "./pages/Contacto/Contacto";
import Footer from "./pages/footer/Footer";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Listado from "./pages/Listado/Listado";
import NoPage from "./pages/Nopage/NoPage";
import SobreNosotros from "./pages/SobreNostros/SobreNosotros";

function App() {

  return (
    <div>
      <header className="myHeader">
        <h1>Aplicación de ejemplo</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
