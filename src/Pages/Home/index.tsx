/* eslint-disable @typescript-eslint/no-unused-vars */
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Navbar from "../../components/Navbar";
import ProfileSidebar from "../../components/ProfileSidebar";
import { SIDEBAR_OPTIONS } from "../../constants/sidebar";

const HomePage = () => {
  const [selected, setSelected] = useState(SIDEBAR_OPTIONS[0]); 
  const { user } = useUser();

  return (
    <div className="flex w-screen h-screen">
      {/* sidebar */}
      <div className="w-100 bg-white shadow-lg flex flex-col justify-between">
        <div className="p-6">
          <div className="flex justify-center items-center">
            <h1>Lock Box</h1>
          </div>

          <Sidebar sidebarOptions={SIDEBAR_OPTIONS} selectedOption={selected} onSelect={setSelected} />

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