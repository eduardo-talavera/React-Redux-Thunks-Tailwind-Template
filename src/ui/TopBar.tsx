import { Logo } from '@/components/Logo'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { openSideMenu } from '@/store/ui/ui';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/index';

export const TopBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <header className='bg-white py-5 px-5 shadow-md'>
      <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center md:container md:mx-auto'>
        <div className='w-100 lg:w-64 mb-10 lg:mb-0 text-center lg:text-left'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <FaBars 
          onClick={() => dispatch(openSideMenu())} 
          size={25}
          className='cursor-pointer'
        />
      </div>
    </header>
  )
}
