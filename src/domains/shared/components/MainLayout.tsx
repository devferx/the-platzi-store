import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </main>
  );
};
