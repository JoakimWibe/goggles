import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContextProvider";
import Nav from "./components/layout/Nav";
import SearchPage from "./components/SearchPage";
import ImagePage from "./components/ImagePage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen justify-between bg-slate-100 ">
          <Nav />

          <div className="bg-slate-100">
            <Routes>
              <Route path="/" element={<Navigate to="/search" replace />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/image" element={<ImagePage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </SearchContextProvider>
  );
}

export default App;
