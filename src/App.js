import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './components/Item'
import NotFound from './components/NotFound'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
