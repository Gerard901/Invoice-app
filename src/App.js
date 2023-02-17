import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
//import Form from './components/layout/Form';
import Invoice from './components/layout/Invoice';
import { MdDeleteForever } from 'react-icons/md';
import './App.css';

const App = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      quantity: null,
      unit: '',
      priceNetto: null,
      vatProcent: null,
      valueNetto: null,
      valueBrutto: null,
    },
  ]);

  const [invoiceType, setInvoiceType] = useState('Faktura VAT');
  const [invoiceNumber, setInvoiceNumber] = useState('1/2023');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoicePlace, setInvoicePlace] = useState('Poznań');
  const [saleDate, setSaleDate] = useState('');
  const [sellerName, setSellerName] = useState('John Doe company');
  const [sellerNIP, setSellerNIP] = useState('7644777');
  const [sellerStreet, setSellerStreet] = useState('Poznańska 48');
  const [sellerZipCode, setSellerZipCode] = useState('60-001');
  const [sellerCity, setSellerCity] = useState('Poznań');
  const [buyerName, setBuyerName] = useState('Don Joe company');
  const [buyerNIP, setBuyerNIP] = useState('7776467');
  const [buyerStreet, setBuyerStreet] = useState('Leśna 2');
  const [buyerZipCode, setBuyerZipCode] = useState('60-002');
  const [buyerCity, setBuyerCity] = useState('Poznań');
  const [days, setDays] = useState('');
  const [payingMethod, setPayingMethod] = useState('Przelew');

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
        quantity: null,
        unit: '',
        priceNetto: null,
        vatProcent: null,
        valueNetto: null,
        valueBrutto: null,
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
    <div className='App bg-gray-200 min-h-full pb-8'>
      <Navbar />
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
                onChange={(e) => setInvoiceType(e.target.value)}
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
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                Data wystawienia:
              </label>
              <input
                type='date'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                Miejsce wystawienia:
              </label>
              <input
                type='text'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                onChange={(e) => setInvoicePlace(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                Data sprzedaży:
              </label>
              <input
                type='date'
                className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                onChange={(e) => setSaleDate(e.target.value)}
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
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  NIP:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setSellerNIP(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Ulica i numer:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setSellerStreet(e.target.value)}
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
                    onChange={(e) => setSellerZipCode(e.target.value)}
                  />
                </div>
                <div className='col-span-2 flex flex-col flex-auto'>
                  <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                    Miejscowość:
                  </label>
                  <input
                    type='text'
                    className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                    onChange={(e) => setSellerCity(e.target.value)}
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
                  onChange={(e) => setBuyerName(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  NIP:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setBuyerNIP(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                  Ulica i numer:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setBuyerStreet(e.target.value)}
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
                    onChange={(e) => setBuyerZipCode(e.target.value)}
                  />
                </div>
                <div className='col-span-2 flex flex-col flex-auto'>
                  <label htmlFor='' className='font-bold text-gray-600 mt-2 '>
                    Miejscowość:
                  </label>
                  <input
                    type='text'
                    className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                    onChange={(e) => setBuyerCity(e.target.value)}
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
                      type='number'
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
                    <select
                      type='text'
                      name='unit'
                      onChange={(e) => handleChange(index, e)}
                      value={inputFields.unit}
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
                    <select
                      type='number'
                      name='vatProcent'
                      onChange={(e) => handleChange(index, e)}
                      value={inputFields.vatProcent}
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
                      type='number'
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
            <div className='flex mt-6'>
              <div className='flex flex-col mr-6'>
                <label
                  htmlFor=''
                  className='text-sm font-bold text-gray-600 mt-2 '
                >
                  Metoda płatności:
                </label>
                <input
                  type='text'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setPayingMethod(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label
                  htmlFor=''
                  className='font-bold text-sm text-gray-600 mt-2 '
                >
                  Termin płatności:
                </label>
                <input
                  type='date'
                  className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Invoice
        invoiceType={invoiceType}
        invoiceDate={invoiceDate}
        invoiceNumber={invoiceNumber}
        invoicePlace={invoicePlace}
        saleDate={saleDate}
        buyerName={buyerName}
        buyerCity={buyerCity}
        buyerNIP={buyerNIP}
        buyerStreet={buyerStreet}
        buyerZipCode={buyerZipCode}
        sellerName={sellerName}
        sellerCity={sellerCity}
        sellerNIP={sellerNIP}
        sellerStreet={sellerStreet}
        sellerZipCode={sellerZipCode}
        inputFields={inputFields}
        days={days}
        payingMethod={payingMethod}
      />
    </div>
  );
};

export default App;
