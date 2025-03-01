
interface MainBoardProps {
  selectedOption: string;
}

const renderBoard = (selectedOption: string) => {
  switch (selectedOption) {
    case "Dashboard":
      return <h1>{selectedOption}</h1>
    case "Passwords":
      return <h1>{selectedOption}</h1>
    case "Documents":
      return <h1>{selectedOption}</h1>
    case "Cards & Bank Accounts":
      return <h1>{selectedOption}</h1>
    case "Secure Notes":
      return <h1>{selectedOption}</h1>
    case "Subscriptions":
      return <h1>{selectedOption}</h1>
    case "Settings":
      return <h1>{selectedOption}</h1>
  }
}

const MainBoard = ({ selectedOption } : MainBoardProps ) => {
  return (
    <div className="p-6">
      {renderBoard(selectedOption)}
    </div>
  )
}

export default MainBoard