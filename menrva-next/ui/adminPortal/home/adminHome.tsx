import React from 'react'
import AdminCard from './adminCard'
import { User } from '@/lib/models/user';

interface UserProps {
  id: number;
  token: string | undefined;
  user: User | null;
}

const AdminHome: React.FC<UserProps> = ({ user, id, token }) => {

  return (
    <div className='pl-16 pt-28'>
      {user ? <AdminCard user={user} token={token}/> : <></>}
    </div>
  )
}

export default AdminHome