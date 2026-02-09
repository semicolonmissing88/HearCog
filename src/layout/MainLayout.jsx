import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { usePageTitle } from "../hooks/usePageTitle";

function MainLayout() {
  usePageTitle();

  return (
    <div className="wrapper">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
