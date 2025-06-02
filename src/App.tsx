import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import History from "@/pages/History";
import News from "@/pages/News";
import Gallery from "@/pages/Gallery";
import Contacts from "@/pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/history" element={<History />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
