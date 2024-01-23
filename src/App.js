import './App.css';
import About from './components/about';
import All from './components/all';
import { Routes, Route } from 'react-router-dom';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<All/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
