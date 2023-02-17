import React, { Component } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

export class Navbar extends Component {
  render() {
    return (
      <div className='p-10 mb-12 flex justify-between shadow-md bg-white'>
        <h1 className='text-2xl font-bold tracking-wide'>Faktury</h1>
        <ul className='flex items-center text-2xl'>
          <li>
            <AiOutlineSearch/>
          </li>
          <li>
            <a href="/preview" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'>Podgląd</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar