import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Position = (props) => {
  const { handleChange, handleDeleteField, inputFields } = props;

  return (
    <>
      {inputFields.map((inputField, index) => {
        return (
          <div
            key={index}
            className='grid grid-cols-1 lg:grid-cols-11 gap-6 mt-6 lg:mt-0'
          >
            <div className='lg:col-span-4 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                Nazwa:
              </label>
              <input
                type='text'
                name='name'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].name}
                id='name'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>

            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                Ilość:
              </label>
              <input
                type='number'
                name='quantity'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].quantity}
                id='quantity'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                Jednostka:
              </label>
              <select
                type='text'
                name='unit'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].unit}
                id='unit'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              >
                <option value='szt.'>szt.</option>
                <option value='godz.'>godz.</option>
                <option value='dni'>dni</option>
                <option value='m-c'>m-c</option>
                <option value='km'>km</option>
                <option value='km2'>km2</option>
                <option value='kg'>kg</option>
              </select>
            </div>
            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                Cena netto:
              </label>
              <input
                type='number'
                name='priceNetto'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].priceNetto}
                id='priceNetto'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                VAT%:
              </label>
              <select
                type='number'
                name='vatProcent'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].vatProcent}
                id='vatProcent'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              >
                <option value='23'>23</option>
                <option value='8'>8</option>
                <option value='5'>5</option>
                <option value='0'>0</option>
              </select>
            </div>
            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                wartość netto:
              </label>
              <input
                type='number'
                name='valueNetto'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].valueNetto}
                id='valueNetto'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='lg:col-span-1 flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-gray-600 mt-2 text-xs'
              >
                wartość brutto:
              </label>
              <input
                type='number'
                name='valueBrutto'
                onChange={(e) => handleChange(index, e)}
                value={inputFields[index].valueBrutto}
                id='valueBrutto'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <button onClick={(e) => handleDeleteField(index, e)}>
              <MdDeleteForever className='text-4xl text-red-600 mt-5'></MdDeleteForever>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Position;
