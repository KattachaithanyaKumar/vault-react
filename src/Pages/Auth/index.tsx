import { Button, Input } from "antd";
import logo from "../../assets/LB.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    toast("Logging in...")
    navigate("/home")
    toast.success("Logged in!")
  }

  const handleSignup = () => {

  }

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 w-[400px]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <h1 className="text-xl font-semibold">Lock Box</h1>
        </div>

        <form action="" className="flex flex-col gap-3 mt-4">
          <Input size="large" placeholder="Username" />
          <Input size="large" type="password" placeholder="Password" />

          <Button type="primary" size="large" className="w-full" onClick={handleLogin}>Login</Button>
          <Button className="w-full" onClick={handleSignup}>Signup</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
