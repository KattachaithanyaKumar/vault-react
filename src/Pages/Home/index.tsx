/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from "antd"
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const sidebarOptions = [
  "Dashboard",
  "Passwords",
  "Documents",
  "Cards & Bank Accounts",
  "Secure Notes",
  "Subscriptions",
  "Settings"
]

const getRandomColor = () => {
  return ColorList[Math.floor(Math.random() * ColorList.length)];
}

const HomePage = () => {
  const username = "Chaithanya";
  const [selected, setSelected] = useState(sidebarOptions[0]); 

  return (
    <div className="flex w-screen h-screen">
      {/* sidebar */}
      <div className="w-100 bg-white p-6">
        <div className="flex justify-center items-center">
          {/* <img src={logo} alt="logo"  /> */}
          <h1>Lock Box</h1>
        </div>

        <Sidebar sidebarOptions={sidebarOptions} selectedOption={selected} />
      </div>  
      
      {/* main board */}
      <div className="w-full bg-gray-200 p-6">
        <Avatar size="large" style={{ backgroundColor: getRandomColor() }}>
          <h3>{username[0]}</h3>
        </Avatar>
      </div>
    </div>
  )
}

export default HomePage