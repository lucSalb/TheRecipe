import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home'; // ajuste o caminho se necessário

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
