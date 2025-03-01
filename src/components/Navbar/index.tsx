import { Avatar } from "antd";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useUser } from "../../context/UserContext"
import { IoMdNotificationsOutline } from "react-icons/io"

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const getRandomColor = () => {
  return ColorList[Math.floor(Math.random() * ColorList.length)];
}

const Navbar = () => {
  const { user } = useUser();
  // const user = {
  //   name: "Chaithanya"
  // }
  return (
    <div className="p-6 flex justify-between items-center">
      <div className="flex gap-2 ">
        <>
          {user?.avatar ? (
            <Avatar size="large" src={user.avatar} />
          ) : (
            <Avatar size="large" style={{ backgroundColor: getRandomColor() }}>
              <h3>{user?.name[0]}</h3>
            </Avatar>
          )}
        </>
        <h1>{user?.name}</h1>
      </div>

      <div>
        <IoMdNotificationsOutline size={32} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar