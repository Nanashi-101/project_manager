import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex items-center justify-center my-12 w-full bg-black text-white py-5 gap-10 font-bold text-3xl'>
      <Link to='/all' className='hover:text-blue-600 transition-all'>All</Link>
      <Link to='/active' className='hover:text-blue-600 transition-all'>Active</Link>
      <Link to='/completed' className='hover:text-blue-600 transition-all'>Completed</Link>
    </div>
  )
}

export default Navigation
