import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import logo from '../../assets/images/freshcart-logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userToken, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  // تحديث حالة `userToken` عند تسجيل الخروج
  function logOut() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login');
  }

  // تحديث الحالة عند تغيير `localStorage`
  useEffect(() => {
    const handleStorageChange = () => {
      setUserToken(localStorage.getItem('userToken'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="bg-gray-200 fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link to={'home'} className="lg:pe-4">
          <img src={logo} width={120} alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        {userToken && (
          <div className="hidden lg:flex lg:gap-x-4 capitalize">
            <NavLink to={'home'} className="font-medium text-gray-900">Home</NavLink>
            <NavLink to={'cart'} className="font-medium text-gray-900">Cart</NavLink>
            <NavLink to={'wishlist'} className="font-medium text-gray-900">Wish List</NavLink>
            <NavLink to={'brands'} className="font-medium text-gray-900">Brands</NavLink>
            <NavLink to={'categories'} className="font-medium text-gray-900">Categories</NavLink>
            <NavLink to={'products'} className="font-medium text-gray-900">Products</NavLink>
          </div>
        )}

        {/* Authentication Links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
          {userToken ? (
            <span onClick={logOut} className="font-medium text-gray-900 cursor-pointer">Log Out</span>
          ) : (
            <>
              <NavLink to={'/'} className="font-medium text-gray-900">Register</NavLink>
              <NavLink to={'login'} className="font-medium text-gray-900">Login <span aria-hidden="true">→</span></NavLink>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to={'home'}>
              <img src={logo} width={120} alt="Logo" />
            </NavLink>
            <button onClick={() => setIsOpen(false)} type="button" className="p-2.5 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            {userToken && (
              <div className="flex flex-col space-y-3 capitalize">
                <NavLink to={'home'} className="font-medium text-gray-900">Home</NavLink>
                <NavLink to={'cart'} className="font-medium text-gray-900">Cart</NavLink>
                <NavLink to={'wishlist'} className="font-medium text-gray-900">Wish List</NavLink>
                <NavLink to={'brands'} className="font-medium text-gray-900">Brands</NavLink>
                <NavLink to={'categories'} className="font-medium text-gray-900">Categories</NavLink>
                <NavLink to={'products'} className="font-medium text-gray-900">Products</NavLink>
              </div>
            )}
            <div className="mt-4">
              {userToken ? (
                <span onClick={logOut} className="font-medium text-gray-900 cursor-pointer">Log Out</span>
              ) : (
                <>
                  <NavLink to={'/'} className="font-medium text-gray-900">Register</NavLink>
                  <NavLink to={'login'} className="font-medium text-gray-900">Login <span aria-hidden="true">→</span></NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
