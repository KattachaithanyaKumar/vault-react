import { Toaster } from "react-hot-toast"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { ReactNode } from "react";
import AuthPage from "./Pages/Auth";
import HomePage from "./Pages/Home";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/" />
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />        
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        } />
      </Routes>

      <Toaster position="top-right" />
    </BrowserRouter>
  )
}

export default App