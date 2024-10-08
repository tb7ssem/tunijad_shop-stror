import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex flex-wrap justify-between items-center'>
          <Link to='/' className='text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
            <img src={logo} alt="Logo" className="h-12 w-auto p-1 mr-2" />
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to='/signup' className='text-gray-300 hover:text-white transition-colors'>
              <UserPlus className='inline-block mr-1' />
              Sign Up
            </Link>
            <Link to='/login' className='text-gray-300 hover:text-white transition-colors'></Link>
              Login
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
