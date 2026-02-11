import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { usePageTitle } from "../hooks/usePageTitle";
import Footer from "../components/Footer";

function MainLayout() {
  usePageTitle();

  return (
    <div id="wrapper">
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
