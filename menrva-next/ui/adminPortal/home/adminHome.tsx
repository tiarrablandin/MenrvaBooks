import React from 'react'
import AdminCard from './adminCard'
import { User } from '@/lib/models/user';

interface UserProps {
  token: string | undefined;
  user: User | null;
}

const AdminHome: React.FC<UserProps> = ({ user, token }) => {

  return (
    <div className='pl-16 pt-28'>
<<<<<<< HEAD
      {user ? <AdminCard user={user} token={token}/> : <></>}
=======
      {user ? <AdminCard user={user} token={token} /> : <></>}
>>>>>>> 11c08824c0c96eb2c0235af91819d12175862dde
    </div>
  )
}

export default AdminHome