import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import HomePage from './pages/HomePage';
// import { SignUp, SignIn } from './components';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
<<<<<<< HEAD
<<<<<<< HEAD
import RequestResetPassword from './pages/request-reset-password';
import ResetPassword from './pages/reset-password';
=======
import Welcome from './pages/Welcome';
>>>>>>> 96e2c3e (update form login)
=======
import Welcome from './pages/Welcome';
>>>>>>> 96e2c3e6395b9fc194d7c30bfc55c4caeb107599

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/" element={<LoginSignUp />} />

=======
        <Route path="/" element={<Welcome />} />
>>>>>>> 96e2c3e (update form login)
=======
        <Route path="/" element={<Welcome />} />
>>>>>>> 96e2c3e6395b9fc194d7c30bfc55c4caeb107599
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="request-reset-password"
          element={<RequestResetPassword />}
        />
        <Route path="reset-password/:id/:token" element={<ResetPassword />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
