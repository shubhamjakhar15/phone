import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from '../layout/Layout';
import HomePage from "../pages/home/Home";
import Signup from "../pages/signup";
import Login from "../pages/login";
import PrivateRoutes from "../pages/PrivateRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/" 
        element={<Login setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route
        path="/home"
        element={
          <PrivateRoutes isAuthenticated={isAuthenticated}>
            <Layout />
          </PrivateRoutes>
        }
      >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;