import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
>>>>>>> develop
import LoginSignUp from './pages/LoginSignUp';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import HomePage from './pages/HomePage';
import 'tailwindcss/tailwind.css';

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
