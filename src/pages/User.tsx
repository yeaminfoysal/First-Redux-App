import { AddUserModal } from "@/components/users/AddUserModal"
import UserCard from "@/components/users/UserCard"
import { useAppSelector } from "@/redux/hooks"

export default function User() {
  const users = useAppSelector((state) => state.user.users)
  return (
    <div className='max-w-7xl mx-auto mt-20 px-5'>
      <div className='flex justify-end items-center gap-5'>
        <h1 className='mr-auto'>Tasks</h1>
        <AddUserModal />
      </div>
      <div className=' mt-5 grid grid-cols-3 gap-10'>
        {
          users.map((user, idx) => (
            <UserCard key={idx} user={user} />
          ))
        }
      </div>
    </div>
  )
}
