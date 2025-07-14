import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Flexo from './pages/Flexo';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute page="Dashboard">
              <Dashboard />
            </PrivateRoute>
          }
        />
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
