import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import "./App.css";
import { Content } from "../components/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/quotes" element={<MainLayout />}>
            <Route path="all" element={<Content />} />
            <Route path="star-wars" element={<Content />} />
            <Route path="famous-people" element={<Content />} />
            <Route path="saying" element={<Content />} />
            <Route path="humour" element={<Content />} />
            <Route path="motivational" element={<Content />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
