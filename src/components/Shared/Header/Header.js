/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { PencilAltIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './header.css'; 
import { NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>
  }

    const navLinkStyles = ({isActive})=>{
        return{
            color:isActive?'lightgreen':'white',
            fontWeight:isActive?'bold': 'normal',
           
        }
    }
  
  return (
    <Disclosure as="nav" className="bg-slate-700">
      {({ open }) => (
        <>
          <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <>
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://www.svgrepo.com/show/296621/t-shirt-shirt.svg"
                    alt="tshirt"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://www.svgrepo.com/show/296621/t-shirt-shirt.svg"
                    alt="thsirt"
                  />
                  </><span className='text-white font-bold text-xl'>BroomingDale</span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                      <NavLink style={navLinkStyles} className="text-gray-300 hover:bg-gray-700  hover:text-white" to='/' > Home </NavLink>
                      <NavLink style={navLinkStyles} to='/blog' > Blog </NavLink>
                
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <PencilAltIcon className="h-6 w-6 mx-2" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to='/profile'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {user?.email} Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                          onClick={()=>signOut(auth)}
                           className={classNames(
                             active ? "bg-gray-100" : "",
                             "block px-4 py-2 text-sm text-gray-700"
                           )}
                         >
                           Sign out
                         </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
        
          </nav>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul>
                  <li><NavLink style={navLinkStyles} className="text-gray-300 hover:bg-gray-700 hover:text-white" to='/' > Home </NavLink>
                      </li>
                      <li>
                      <NavLink style={navLinkStyles} to='/blog' > Blog </NavLink>
                      </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
