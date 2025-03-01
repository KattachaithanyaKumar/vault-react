import { Avatar, Button, Divider, Input, Modal } from 'antd'
import { User } from '../../types/User.type'
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

interface ProfileProps {
  user: User;
}

const ProfileSidebar = ({ user } : ProfileProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { setUser } = useUser();

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const logout = async () => {
    const res = supabase.auth.signOut();
    setUser(null)
    console.log(res);
    navigate("/")
  }

  return (
    <>
      <div className="flex gap-2 items-center p-6 cursor-pointer hover:bg-gray-400" onClick={toggleModal}>
        <Avatar src={user?.avatar} alt="Profile Picture" />
        <p>{user?.name}</p>
      </div>

      <Modal 
        open={isModalOpen} 
        onClose={closeModal} 
        onCancel={closeModal} 
        onOk={closeModal}
        footer={[
          <div className='flex justify-between'>
            <Button type='default' onClick={logout}>
              Logout
            </Button>

            <div className='flex gap-2'>
              <Button onClick={closeModal}>
                Cancel
              </Button>
              <Button type='primary' onClick={closeModal}>
                Save Changes
              </Button>
            </div>
          </div>
        ]}
      >
        <div className=''>
          <div>
            <Avatar size={84} src={user?.avatar} alt="Profile Picture" />
            <h3 className='mt-2'>{user?.name}</h3>
            <p className='font-thin'>{user.email}</p>
          </div>

          <Divider />

          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <label className='w-32'>Name</label>
              <Input size='large' value={user.name} />
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-32'>Email Address</label>
              <Input size='large' value={user.email} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProfileSidebar