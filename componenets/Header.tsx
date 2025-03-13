import Image from 'next/image';
import logo from '../public/car.ico';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image
            src={logo} // Replace with your logo path
            alt="Car Gallery Logo"
            width={40} // Adjust as needed
            height={40} // Adjust as needed
            className="object-contain"
          />
          <h1 className="text-2xl font-bold">Car Gallery</h1>
        </div>

        {/* Right Section: Navigation and Button */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            <Link href="/">
              <a className="text-lg hover:text-yellow-400">Home</a>
            </Link>
            <Link href="/sell">
              <a className="text-lg hover:text-yellow-400">Sell</a>
            </Link>
            <Link href="/buy">
              <a className="text-lg hover:text-yellow-400">Buy</a>
            </Link>
            <Link href="/rent">
              <a className="text-lg hover:text-yellow-400">Rent</a>
            </Link>
            <Link href="/trade">
              <a className="text-lg hover:text-yellow-400">Trade</a>
            </Link>
          </nav>
          <Link href="/get-started">
            <a className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};


export default Header;
