import { BrowserRouter, Route,Routes } from "react-router-dom"

import { Home } from "./routes/home"
import { Community } from "./routes/community"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidade" element={<Community />} />
      </Routes>
    </BrowserRouter>
  )
}