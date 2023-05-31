import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import Dashboard from './pages/Dashboard';
// import { SignUp, SignIn } from './components';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import RequestResetPassword from './pages/request-reset-password';
import ResetPassword from './pages/reset-password';

import HomePage from './pages/HomePage';
import Dashboard2 from './pages/Dashboard_2';
import DetailProduct from './pages/DetailProduct';

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log('push di src app develop');
=======
console.log('console log di src App');
>>>>>>> 74b773e (psuh console log di src App)

>>>>>>> 9e73867 (psuh console log di src App)
=======
console.log('console log di src App');

>>>>>>> 74b773e (psuh console log di src App)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginSignUp />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/request-reset-password"
          element={<RequestResetPassword />}
        />
        <Route path="reset-password/:id/:token" element={<ResetPassword />} />

        <Route path="/home" element={<Dashboard />} />
        <Route path="/home2" element={<Dashboard2 />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
