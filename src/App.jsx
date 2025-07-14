import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Flexo from './pages/Flexo';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Flexo page (protected) */}
        <Route
          path="/flexo"
          element={
            <PrivateRoute page="Flexo">
              <Flexo />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
