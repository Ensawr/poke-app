import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Layout from './layout/Layout';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Pokemons from './pages/Pokemons'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/pokemons" element={<Pokemons />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
