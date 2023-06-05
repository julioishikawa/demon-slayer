import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateChar } from "../pages/CreateChar";
import { CreateHashira } from "../pages/CreateHashira";
import { CreateOni } from "../pages/CreateOni";
import { Hashiras } from "../pages/Hashiras";
import { Onis } from "../pages/Onis";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateChar />} />
      <Route path="/createhashira" element={<CreateHashira />} />
      <Route path="/createoni" element={<CreateOni />} />
      <Route path="/hashiras" element={<Hashiras />} />
      <Route path="/onis" element={<Onis />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
