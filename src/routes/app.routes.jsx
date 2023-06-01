import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateChar } from "../pages/CreateChar";
import { Hashiras } from "../pages/Hashiras";
import { Onis } from "../pages/Onis";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateChar />} />
      <Route path="/hashiras" element={<Hashiras />} />
      <Route path="/onis" element={<Onis />} />
    </Routes>
  );
}
