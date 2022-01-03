import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './components/Item'
import Results from './components/Results'
import NotFound from './components/NotFound'

const App = () => {
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Results />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
