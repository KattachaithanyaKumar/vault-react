import toast, { Toaster } from "react-hot-toast"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { ReactNode } from "react";
import AuthPage from "./Pages/Auth";
import HomePage from "./Pages/Home";
import { ConfigProvider } from "antd";
import { useUser } from "./context/useUser";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loadingUser } = useUser();

  if (loadingUser) return null;

  if (!user) {
    toast.error("User not logged in!");
    return <Navigate to="/" />;
  }

  return children;
};

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