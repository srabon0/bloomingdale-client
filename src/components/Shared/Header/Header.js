/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './header.css'; 
import { Link, NavLink } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
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
  
  if (!user){
    <Loading></Loading>
    
  }

    const navLinkStyles = ({isActive})=>{
        return{
            color:isActive?'lightgreen':'white',
            fontWeight:isActive?'bold': 'normal',
           
        }
    }
  
  return (
    <Disclosure as="nav" className="bg-blue-900">
      {({ open }) => (
        <>
          <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <div className="flex md:mt-1 space-x-4">
                      <NavLink style={navLinkStyles} className="text-gray-300   hover:text-white" to='/' > Home </NavLink>
                      <NavLink style={navLinkStyles} className="text-gray-300   hover:text-white" to='/blog' > Blog </NavLink>
                
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                { user && <>
                
                  <NavLink
                  as={Link}
                  to='/manage'
                 
                  style={navLinkStyles} className="hidden md:block mx-5 text-gray-300  hover:text-white"
                >Manage Items
                  
                 
                </NavLink>
                <NavLink
                  as={Link}
                  to='/addproduct'
                 
                  style={navLinkStyles} className="hidden md:block mx-5 text-gray-300  hover:text-white"
                >Add Items
                  
                 
                </NavLink>
                <NavLink
                  as={Link}
                  to='/myitems'
                 
                  style={navLinkStyles} className="hidden md:block mx-5 text-gray-300  hover:text-white"
                >My items
                  
                 
                </NavLink>

                <NavLink
                  as={Link}
                  to='/feedback'
                 
                  style={navLinkStyles} className="hidden md:block mx-5 text-gray-300  hover:text-white"
                >Feedback
                  
                 
                </NavLink>


                </>
                }

                {/* Profile dropdown */}
                
               {
                 user ?  <Menu as="div" className="ml-3 relative">
                 <div>
                   <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="h-8 w-8 rounded-full"
                       src={user?.photoURL || "https://img.icons8.com/plasticine/344/user.png"}
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
                           {user?.displayName || user.email.split("@")[0]} - Profile
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
               </Menu>:
               <>
               <NavLink   to='/login'  style={navLinkStyles} className="hidden md:block md:mx-5 text-gray-300  hover:text-white" >Login</NavLink>
               <NavLink   to='/signup'  style={navLinkStyles} className="hidden md:block md:mx-5 text-gray-300  hover:text-white" >SignUp</NavLink>
               
               </>}
              </div>
            </div>
        
          </nav>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul>
                  <li className='border-2 hover:border-l-green-300 border-transparent  p-1 rounded-md transition duration-300 ' ><NavLink style={navLinkStyles} className="text-gray-300  hover:text-white" to='/' > Home </NavLink>
                      </li>
                      <li  className='border-2 hover:border-l-green-300 border-transparent p-1 rounded-md   transition duration-300'>
                      <NavLink style={navLinkStyles} to='/blog' > Blog </NavLink>
                      </li>
                      { 
                       user? <>
                       <li  className='border-2 hover:border-l-green-300 border-transparent p-1 rounded-md  transition duration-300 ' >
                      <NavLink style={navLinkStyles} to='/manage' > Manage Items </NavLink>
                      </li>
                      <li  className='border-2 hover:border-l-green-300 border-transparent  p-1 rounded-md  transition duration-300' >
                      <NavLink style={navLinkStyles} to='/addproduct' > Add items </NavLink>
                      </li>
                      <li  className='border-2 hover:border-l-green-300 border-transparent p-1 rounded-md  transition duration-300 ' >
                      <NavLink style={navLinkStyles} to='/myitems' > My items </NavLink>
                      </li>
                      <li  className='border-2 hover:border-l-green-300 border-transparent p-1 rounded-md  transition duration-300 ' >
                      <NavLink style={navLinkStyles} to='/feedback' > Feedback </NavLink>
                      </li>
                      
                       
                       </>:<>
                       <li  className='border-2 hover:border-l-green-300 border-transparent p-1 rounded-md  transition duration-300 ' >
                      <NavLink style={navLinkStyles} to='/login' > Login </NavLink>
                      </li>
                      <li  className='border-2 hover:border-l-green-300 border-transparent  p-1 rounded-md  transition duration-300' >
                      <NavLink style={navLinkStyles} to='/signup' > SignUp </NavLink>
                      </li>
                       </>
                      }
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
