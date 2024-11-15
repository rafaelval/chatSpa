import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/privateRoute";
import {Chat} from "./components/Chat/Chat";

const App = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Routes>
        {/* Ruta protegida para el chat */}
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        {/* Ruta pública para registro */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Redirigir por defecto a registro */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
