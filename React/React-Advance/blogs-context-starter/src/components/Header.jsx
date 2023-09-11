import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {

  const { toggleDarkMode, darkMode } = useContext(AppContext);
  return (
      <div className={`${
      darkMode ? 'bg-black text-white border-black shadow-sm shadow-slate-900' : 'bg-white text-black border-white'
    } w-full  border  shadow-md  py-4 fixed top-0 `}>
          <header className=' text-center flex justify-center items-center flex-row gap-x-5'>
        <h1 className=' text-3xl font-extrabold  uppercase'>Codehelp Blogs</h1>
        
        <button className=' text-4xl' onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      
      </header>
      
    </div>
  )
}

export default Header;