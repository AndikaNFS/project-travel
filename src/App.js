import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import HomePage from './pages/HomePage';
// import { SignUp, SignIn } from './components';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
