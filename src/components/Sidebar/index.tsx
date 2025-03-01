interface SideBarProps {
  sidebarOptions: string[];
  selectedOption: string;
}

const Sidebar: React.FC<SideBarProps> = ({ sidebarOptions, selectedOption }) => {
  return (
    <div className="">
      {sidebarOptions.map((option) => (
        <div key={option} className={selectedOption == option ? "bg-red-500" : "bg-white"}>
          <p>{option}</p>
        </div>
      ))}
    </div>
  )
}

export default Sidebar