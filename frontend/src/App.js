import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AdminPanel from "./AdminPanel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>

    </Routes>
    
  );
}

export default App;
