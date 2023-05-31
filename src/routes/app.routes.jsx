import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { CreateChar } from "../pages/CreateChar";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/create$character" element={<CreateChar />} />
    </Routes>
  );
}
