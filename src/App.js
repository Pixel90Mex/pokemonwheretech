import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MapGeneratorPage from "./pages/MapGeneratorPage"

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<MapGeneratorPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
