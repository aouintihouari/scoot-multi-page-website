import { useState } from "react";
import { Routes, Route } from "react-router";
import { Header, Footer } from "./components";
import { Home, About, Careers, Locations } from "./pages";
import NavBar from "./components/MobileComponents/NavBar";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <Header openMenu={openMenu} onOpenMenu={handleOpenMenu} />
      {openMenu && <NavBar onClose={handleCloseMenu} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
