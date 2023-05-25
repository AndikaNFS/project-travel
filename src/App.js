import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
