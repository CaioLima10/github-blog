import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function LayoutDefault() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}
