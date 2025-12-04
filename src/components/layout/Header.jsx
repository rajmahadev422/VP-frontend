import { Link } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="bg-white shadow-md h-[55px]">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex shrink-0">
            <img className="h-[50px]" src="logo.png" alt="" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* CTA Button */}
          {userId ? <a href="" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Logout</a> 
          : 
          <Link to='/login' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </Link>}
        </div>
      </nav>
    </header>
  );
};

export default Header;