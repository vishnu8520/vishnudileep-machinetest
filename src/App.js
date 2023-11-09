import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/products' Component={Products} ></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
