import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> origin/master
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> c297554011ed7495a387ba7226d84e690ed0b7f6
import LoginSignUp from './pages/LoginSignUp';
import HomePage from './pages/HomePage';
import 'tailwindcss/tailwind.css';
import { SignUp, SignIn } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
