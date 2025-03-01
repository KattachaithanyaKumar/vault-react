import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../types/User.type";
import { supabase } from "../lib/supabase"; // Adjust the import based on your project structure

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loadingUser: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      
      if (data?.user) {
        setUser({
          id: data.user.id,
          name: data.user.user_metadata?.full_name || data.user.email,
          email: data.user.email || "",
          avatar: data.user.user_metadata?.avatar_url || "",
        });
      }

      setLoadingUser(false);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
