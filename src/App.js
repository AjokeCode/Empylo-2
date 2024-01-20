import './App.css';
import All from './components/all';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<All/>}/>
      </Routes>
    </div>
  );
}

export default App;
