import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/blog";
import { LayoutDefault } from "./layout/layoutDefault";
import { Post } from "./pages/post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
