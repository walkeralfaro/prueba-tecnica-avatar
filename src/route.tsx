import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./views/Home"
import Pokemon from "./views/Pokemon"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}