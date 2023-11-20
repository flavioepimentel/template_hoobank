import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sciclop_website" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
