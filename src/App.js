import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import WorldTour from './pages/WorldTour';
import Ressources from './pages/Ressources';
import NotFound from './pages/NotFound';
import Apropos from './pages/Apropos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/destinations' exact element={<Destinations />} />
          <Route path='/worldtour' exact element={<WorldTour />} />
          <Route path='/ressources' exact element={<Ressources />} />
          <Route path='/apropos' exact element={<Apropos />} />
          <Route path='*' exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
