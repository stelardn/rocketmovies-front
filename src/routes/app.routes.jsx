import { Route, Routes } from 'react-router-dom';

import { Home } from "../pages/Home";
import { CreateMovie } from "../pages/CreateMovie";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/404";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}