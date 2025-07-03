import { ModeToggle } from '@/components/mode-toggle'
import { Link } from 'react-router'

export default function Navbar() {
    return (
        <div className='max-w-7xl flex mx-auto h-16 px-5 gap-3 items-center'>
            <Link to='/'> <h2 className='text-[25px] font-bold'>Logo</h2></Link>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/user'>User</Link>
            <div className='ml-auto'><ModeToggle/></div>
        </div>
    )
}
