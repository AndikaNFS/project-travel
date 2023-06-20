import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import Dashboard1 from './pages/Dashboard1';
// import { SignUp, SignIn } from './components';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import RequestResetPassword from './pages/request-reset-password';
import ResetPassword from './pages/reset-password';

import HomePage from './pages/HomePage';
import Dashboard2 from './pages/Dashboard_2';
import DetailProduct from './pages/DetailProduct';
import CheckoutPage from './pages/CheckoutPage';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboard/Dashboard';
import Ticket from './pages/dashboard/Ticket';
import Favorite from './pages/dashboard/Favorite';
import Transaction from './pages/dashboard/Transaction';
import Setting from './pages/dashboard/Setting';

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

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

        <Route path="/product/:id" element={<DetailProduct />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tickets" element={<Ticket />} />
        <Route path="/dashboard/favorites" element={<Favorite />} />
        <Route path="/dashboard/transactions" element={<Transaction />} />
        <Route path="/dashboard/settings" element={<Setting />} />

        <Route path="/home3" element={<Dashboard1 />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/home2" element={<Dashboard2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
