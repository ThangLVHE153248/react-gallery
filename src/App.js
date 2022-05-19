import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import HomeRouter from "./routers/HomeRouter";
import { GalleryProvider } from "./contexts/GalleryContext";

function App() {
  return (
    <GalleryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRouter />}>
            <Route path="/" element={<Gallery />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {/* <HomeRouter></HomeRouter> */}
    </GalleryProvider>
  );
}

export default App;
