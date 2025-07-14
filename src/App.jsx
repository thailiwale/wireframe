import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Flexo from './pages/Flexo';
import Dashboard from './pages/Dashboard'; // Optional, add only if created
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Route: Flexo */}
        <Route
          path="/flexo"
          element={
            <PrivateRoute page="Flexo">
              <Flexo />
            </PrivateRoute>
          }
        />

        {/* Optional: Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute page="Dashboard">
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
