import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import Update from "./Pages/Update";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";

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
          <Route path="/studios/:id" element={<Show />} />
          <Route path="/studios/:id/edit" element={<Update />} />
          <Route path="/studios/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
