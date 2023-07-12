import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { CreateChar } from "../pages/CreateChar";
import { CreateHuman } from "../pages/CreateHuman";
import { CreateOni } from "../pages/CreateOni";
import { Hashiras } from "../pages/Hashiras";
import { Onis } from "../pages/Onis";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { CommunityChar } from "../pages/CommunityChar";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/create" element={<CreateChar />} />
      <Route path="/createhuman" element={<CreateHuman />} />
      <Route path="/createoni" element={<CreateOni />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/hashiras" element={<Hashiras />} />
      <Route path="/onis" element={<Onis />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/communitycharacters" element={<CommunityChar />} />
    </Routes>
  );
}
