/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from "antd"
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Navbar from "../../components/Navbar";
import ProfileSidebar from "../../components/ProfileSidebar";


const sidebarOptions = [
  "Dashboard",
  "Passwords",
  "Documents",
  "Cards & Bank Accounts",
  "Secure Notes",
  "Subscriptions",
  "Settings"
]

const HomePage = () => {
  const { user } = useUser();
  const [selected, setSelected] = useState(sidebarOptions[0]); 

  return (
    <div className="flex w-screen h-screen">
      {/* sidebar */}
      <div className="w-100 bg-white shadow-lg flex flex-col justify-between">
        <div className="p-6">
          <div className="flex justify-center items-center">
            <h1>Lock Box</h1>
          </div>

          <Sidebar sidebarOptions={sidebarOptions} selectedOption={selected} onSelect={setSelected} />

        </div>
        
        {user && <ProfileSidebar user={user} />}
      </div>  
      
      {/* main board */}
      <div className="w-full bg-gray-200 ">
        <Navbar />
      </div>
    </div>
  )
}

export default HomePage