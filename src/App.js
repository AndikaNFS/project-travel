import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LoginSignUp from './pages/LoginSignUp';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignUp />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
