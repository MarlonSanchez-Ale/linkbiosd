import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Oldmanwinters from './components/pages/Oldmanwinters';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/oldmanwinters" element={<Oldmanwinters />} />
      </Routes>
    </Router>
  );
};

export default App;
