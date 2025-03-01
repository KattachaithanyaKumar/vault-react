interface SideBarProps {
  sidebarOptions: string[];
  selectedOption: string;
  onSelect: (option: string) => void; 
}

const Sidebar: React.FC<SideBarProps> = ({ sidebarOptions, selectedOption, onSelect }) => {
  return (
    <div className="mt-12">
      {sidebarOptions.map((option) => (
        <div
          key={option}
          className={`p-2 rounded-md cursor-pointer ${selectedOption === option ? "bg-gray-200 text-black" : "bg-white text-black"} hover:bg-gray-100`}
          onClick={() => onSelect(option)}
        >
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
