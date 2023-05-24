import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LoginSignUp from './pages/LoginSignUp';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';


function App() {
  return (
    <BrowserRouter>
    <LoginSignUp />
    <Routes>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
