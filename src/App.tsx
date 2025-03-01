import { Toaster } from "react-hot-toast"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { ReactNode } from "react";
import AuthPage from "./Pages/Auth";
import HomePage from "./Pages/Home";
import { ConfigProvider } from "antd";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/" />
}

const themeConfig = {
  token: {
    colorPrimary: "black",
  }
}

const App = () => {
  return (
    <ConfigProvider theme={themeConfig}>
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
    </ConfigProvider>
  )
}

export default App