import { IoMdNotificationsOutline } from "react-icons/io"

const Navbar = () => {
  return (
    <div className="p-6 flex bg-white justify-between items-center">
      <div className="flex gap-2 ">
        
      </div>

      <div>
        <IoMdNotificationsOutline size={32} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar