//import { Outlet, Link } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import AsideContent from "../Aside/AsideContent";
import "./Layout.css";

const Layout = () => {
  return (
    <>
    <div className="navigation">
      <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/listado">Listado</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/sobreNosotros">Sobre nosotros</Link>
      </nav>

      <Outlet />
      <AsideContent />
    </div>
    </>
  );
};

export default Layout;
