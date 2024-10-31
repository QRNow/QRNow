
// import { useState } from 'react';
// import { FaBars, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBell } from 'react-icons/fa';

// function Nav() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(prevState => !prevState);
//   };

//   return (
//     <div className="flex flex-col">

//       <header className="fixed top-0 left-0 w-full flex items-center bg-white p-4 shadow-lg z-50">
//         <FaBars
//           className="menu-icon text-green-500 text-2xl cursor-pointer mr-4"
//           onClick={toggleSidebar}
//         />
//         <h1 className="flex-1 text-green-900 font-bold text-xl ml-[600px] font-DynaPuff ">PURVANCHAL CAFE</h1>
//         <FaBell className="header-icon text-green-500 text-xl cursor-pointer ml-4" />
//       </header>

//       <div
//         className={`fixed top-0 left-0 h-full bg-[#F0F4F3] p-4 transition-transform duration-300 ease-in-out shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } w-64 z-40`}
//       >
//         <ul className="mt-16 space-y-4">
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaUser className="mr-2" /> Profile
//           </li>
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaCog className="mr-2" /> Settings
//           </li>
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaQuestionCircle className="mr-2" /> Help
//           </li>
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaSignOutAlt className="mr-2" /> Log Out
//           </li>
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaSignInAlt className="mr-2" /> Login
//           </li>
//           <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
//             <FaUserPlus className="mr-2" /> Sign Up
//           </li>
//         </ul>
//       </div>

//       <main
//         className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} mt-16 p-4`}
//       >
//       </main>
//     </div>
//   );
// }

// export default Nav;

import { useState } from 'react';
import { FaBars, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBell } from 'react-icons/fa';

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4 shadow-lg z-50">
        <FaBars
          className="text-green-500 text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <h1 className="text-green-900 font-bold text-lg sm:text-xl font-DynaPuff text-center w-full">
          PURVANCHAL CAFE
        </h1>
        <FaBell className="text-green-500 text-xl cursor-pointer" />
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#F0F4F3] p-4 transition-transform duration-300 ease-in-out shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 z-40`}
      >
        <ul className="mt-16 space-y-4">
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaUser className="mr-2" /> Profile
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaCog className="mr-2" /> Settings
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaQuestionCircle className="mr-2" /> Help
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaSignOutAlt className="mr-2" /> Log Out
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaSignInAlt className="mr-2" /> Login
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaUserPlus className="mr-2" /> Sign Up
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} mt-16 p-4`}
      >
        {/* Content goes here */}
      </main>
    </div>
  );
}

export default Nav;
