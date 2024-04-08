import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/blog";
import { LayoutDefault } from "./layout/layoutDefault";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  );
}
