import { Avatar } from "antd";
import { useUser } from "../../context/useUser";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const getRandomColor = () => {
  return ColorList[Math.floor(Math.random() * ColorList.length)];
}
const ProfilePicture = ({...props}) => {
  const { user } = useUser();
  return (
    <>
      {user?.avatar ? (
        <Avatar {...props} src={user.avatar} />
      ) : (
        <Avatar {...props} style={{ backgroundColor: getRandomColor() }}>
          {props.size == "84" ? (
            <h1>{user?.name[0]}</h1>
          ) : (
            <h3>{user?.name[0]}</h3>
          )}
        </Avatar>
      )}
    </>
  )
}

export default ProfilePicture