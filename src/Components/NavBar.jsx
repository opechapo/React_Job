import React from "react";
import { NavLink } from "react-router-dom";
import DLT from "../assets/DLT-removebg.png"


function NavBar() {
const linkClass = ({isActive}) =>
  isActive
? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :
"text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"


  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
             <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex white flex-shrink-0 items-center mr-4 "to='/'>
                <img className="h-10 w-auto" src={DLT} alt="dlt logo" />
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-8">
                  <NavLink to="/" className={linkClass}>Home</NavLink>
                  <NavLink to="/jobs" className={linkClass}>Job</NavLink>
                  <NavLink to="/Add job" className={linkClass}>Add Job</NavLink>
                </div>
              </div>
             </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
