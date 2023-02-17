import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Form = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      quantity: '',
      unit: '',
      priceNetto: '',
      vatProcent: '',
      valueNetto: '',
      valueBrutto: '',
    },
  ]);
  const [name, setName] = useState('John');

  const handleChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      {
        name: '',
        quantity: '',
        unit: '',
        priceNetto: '',
        vatProcent: '',
        valueNetto: '',
        valueBrutto: '',
      },
    ]);
  };

  const handleDeleteField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    console.log(values);
    setInputFields(values);
  };

  return (
    <div className='container lg:max-w-7xl shadow-md mx-auto py-10 px-10 rounded bg-white'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between flex-col lg:flex-row border-b-2 pb-8'>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
              Typ:
            </label>
            <select
              name=''
              id=''
              className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
            >
              <option value='vat'>Faktura VAT</option>
              <option value='proforma'>Faktura proforma</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
              Numer:
            </label>
            <input
              type='text'
              className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
              Data wystawienia:
            </label>
            <input
              type='date'
              className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
              Miejsce wystawienia:
            </label>
            <input
              type='text'
              className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
              Data sprzedaży:
            </label>
            <input
              type='date'
              className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
            />
          </div>
        </div>
        {/*------------------------------------------------------------------------------------------------*/}
        <div className='flex flex-col lg:flex-row gap-8 mt-8 border-b-2 pb-8'>
          <div className='flex-auto'>
            <div className='flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-black mt-2 mb-6 text-xl'
              >
                Sprzedawca:
              </label>
              <input
                type='text'
                placeholder='Podaj pełną nazwę firmy'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                NIP:
              </label>
              <input
                type='text'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                Ulica i numer:
              </label>
              <input
                type='text'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-x-8'>
              <div className='col-span-1 flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Kod pocztowy:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                />
              </div>
              <div className='col-span-2 flex flex-col flex-auto'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Miejscowość:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                />
              </div>
            </div>
          </div>
          <div className='flex-auto'>
            <div className='flex flex-col'>
              <label
                htmlFor=''
                className='font-bold text-black mt-2 mb-6 text-xl '
              >
                Nabywca:
              </label>
              <input
                type='text'
                placeholder='Podaj pełną nazwę firmy'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                NIP:
              </label>
              <input
                type='text'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                Ulica i numer:
              </label>
              <input
                type='text'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-x-8'>
              <div className='col-span-1 flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Kod pocztowy:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                />
              </div>
              <div className='col-span-2 flex flex-col flex-auto'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Miejscowość:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                />
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------------------------------------------------------------------------*/}
        <div className='mt-8'>
          <div>
            <h1 className='font-bold text-black mt-2 mb-6 text-xl'>
              Pozycja na fakturze
            </h1>
          </div>
          {inputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className='grid grid-cols-1 lg:grid-cols-11 gap-6'
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
                    value={inputFields.name}
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
                    type='text'
                    name='quantity'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.quantity}
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
                  <input
                    type='text'
                    name='unit'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.unit}
                    id='unit'
                    className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  />
                </div>
                <div className='lg:col-span-1 flex flex-col'>
                  <label
                    htmlFor=''
                    className='font-bold text-gray-600 mt-2 text-xs'
                  >
                    Cena netto:
                  </label>
                  <input
                    type='text'
                    name='priceNetto'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.priceNetto}
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
                  <input
                    type='text'
                    name='vatProcent'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.vatProcent}
                    id='vatProcent'
                    className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  />
                </div>
                <div className='lg:col-span-1 flex flex-col'>
                  <label
                    htmlFor=''
                    className='font-bold text-gray-600 mt-2 text-xs'
                  >
                    wartość netto:
                  </label>
                  <input
                    type='text'
                    name='valueNetto'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.valueNetto}
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
                    type='text'
                    name='valueBrutto'
                    onChange={(e) => handleChange(index, e)}
                    value={inputFields.valueBrutto}
                    id='valueBrutto'
                    className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  />
                </div>
                <button onClick={() => handleDeleteField(index)}>
                  <MdDeleteForever className='text-4xl text-red-600 mt-5'></MdDeleteForever>
                </button>
              </div>
            );
          })}

          <button
            onClick={() => handleAddField()}
            className='flex mt-4 font-bold py-2 px-4 bg-green-500 text-white rounded'
          >
            Dodaj pozycję
          </button>
          <button
            onClick={handleSubmit}
            className='flex mt-4 font-bold py-2 px-4 bg-blue-500 text-white rounded'
          >
            Zapisz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
