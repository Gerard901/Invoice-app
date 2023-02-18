import React from 'react';
import { FaPrint } from 'react-icons/fa';

const Navbar = (props) => {
  return (
    <div className='p-10 mb-12 flex justify-between shadow-md bg-white'>
      <h1 className='text-3xl font-bold tracking-wide flex'>
        Faktury
        <FaPrint className='ml-3 mt-1 text-teal-600' />
      </h1>

      <button
        onClick={() => props.handlePrint()}
        className='text-teal-600 bg-transparent border border-solid border-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      >
        Drukuj / PDF
      </button>
    </div>
  );
};

export default Navbar;
