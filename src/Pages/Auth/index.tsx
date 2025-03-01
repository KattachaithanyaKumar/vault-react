import { Button, Divider, Input } from "antd";
import logo from "../../assets/LB.png";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../../lib/supabase";
import { useUser } from "../../context/UserContext";

const AuthPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      console.log(data);

      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      if (data?.user) {
        setUser({
          id: data.user.id,
          name: data.user.user_metadata?.full_name || data.user.email,
          email: data.user.email || "",
          avatar: data.user.user_metadata?.avatar_url || ""
        });

        if (location.pathname === "/") {
          navigate("/home", { replace: true });
        }
      }
    };

    fetchUser();
  }, [navigate, setUser, location.pathname]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast("Logging in...");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    console.log(data);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      console.error(error);
    } else {
      toast.success("Logged in!");
      if (data?.user) {
        setUser({
          id: data.user.id,
          name: data.user.user_metadata?.full_name || data.user.email,
          email: data.user.email || "",
          avatar: data.user.user_metadata?.avatar_url || ""
        });
        navigate("/home", { replace: true });
      }
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast("Signing up...");

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    console.log(data);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      console.error(error);
    } else {
      toast.success("Signup success! Verify email to continue");
    }
  };

  const handleSignInWithGoogle = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    setLoading(false);
    if (error) {
      toast.error(error.message);
      console.error(error);
    } else {
      toast.success("Logged In!");
    }
  };

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

        <form onSubmit={handleLogin} className="flex flex-col gap-3 mt-4">
          <Input
            size="large"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input.Password
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: () => { setPasswordVisible(!passwordVisible) } }}
            size="large"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="w-full"
            onClick={handleLogin}
            loading={loading}
          >
            Login
          </Button>
          <Button
            className="w-full"
            onClick={handleSignup}
            loading={loading}
          >
            Signup
          </Button>

          <Divider variant="solid" style={{ margin: "0px" }} />

          <Button onClick={handleSignInWithGoogle} loading={loading}><FcGoogle /> Login using Google</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
