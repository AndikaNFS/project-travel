import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import HomePage from './pages/HomePage';
// import { SignUp, SignIn } from './components';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

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
