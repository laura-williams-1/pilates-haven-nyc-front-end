import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import Update from "./Pages/Update";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studios" element={<Index />} />
          <Route path="/studios/about" element={<About />} />
          <Route path="/studios/:id" element={<Show />} />
          <Route path="/studios/:id/edit" element={<Update />} />
          <Route path="/studios/new" element={<New />} />
          <Route path="/welcome" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
