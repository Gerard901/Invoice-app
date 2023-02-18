import React, { useState, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Invoice from './components/layout/Invoice';
import Input from './components/layout/Input';
import Position from './components/layout/Position';
import { useReactToPrint } from 'react-to-print';
import './App.css';

const App = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      quantity: 1,
      unit: 'szt.',
      priceNetto: 0,
      vatProcent: 23,
      valueNetto: 0,
      valueBrutto: 0,
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
  const [sumNetto, setSumNetto] = useState(0);
  const [sumBrutto, setSumBrutto] = useState(0);
  const [sumVat, setSumVat] = useState(0);

  const handleChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;

    if (e.target.name === 'quantity') {
      values[index].valueNetto = (
        values[index].quantity * values[index].priceNetto
      ).toFixed(2);
      values[index].valueBrutto = (
        values[index].valueNetto *
        (1 + values[index].vatProcent / 100)
      ).toFixed(2);
    }
    if (e.target.name === 'valueNetto' || e.target.name === 'vatProcent') {
      values[index].valueBrutto = (
        values[index].valueNetto *
        (1 + values[index].vatProcent / 100)
      ).toFixed(2);
      values[index].priceNetto = (
        values[index].valueNetto / values[index].quantity
      ).toFixed(2);
    }
    if (e.target.name === 'valueBrutto') {
      values[index].valueNetto = (
        values[index].valueBrutto /
        (1 + values[index].vatProcent / 100)
      ).toFixed(2);
      values[index].priceNetto = (
        values[index].valueNetto / values[index].quantity
      ).toFixed(2);
    }
    if (e.target.name === 'priceNetto') {
      values[index].valueNetto = (
        values[index].quantity * values[index].priceNetto
      ).toFixed(2);
      values[index].valueBrutto = (
        values[index].valueNetto *
        (1 + values[index].vatProcent / 100)
      ).toFixed(2);
    }

    setInputFields(values);
    sumValues(values);
  };

  const sumValues = (values) => {
    let brutto = 0;
    let vat = 0;
    let netto = 0;

    for (var i = 0; i < values.length; i++) {
      brutto += parseFloat(values[i].valueBrutto);
      netto += parseFloat(values[i].valueNetto);
      vat += parseFloat(values[i].valueNetto * (values[i].vatProcent / 100));
    }
    setSumBrutto(brutto.toFixed(2));
    setSumNetto(netto.toFixed(2));
    setSumVat(vat.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      {
        name: '',
        quantity: 1,
        unit: 'szt.',
        priceNetto: 0,
        vatProcent: 23,
        valueNetto: 0,
        valueBrutto: 0,
      },
    ]);
  };

  const handleDeleteField = (index, e) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    sumValues(values);
  };

  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: 'Faktura ' + invoiceNumber,
  });

  return (
    <div className='App bg-gray-200 min-h-full pb-8'>
      <Navbar handlePrint={handlePrint} />
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
            <Input type='text' onChange={setInvoiceNumber} label='Numer:' />
            <Input
              type='date'
              onChange={setInvoiceDate}
              label='Data wystawienia:'
            />
            <Input
              type='text'
              onChange={setInvoicePlace}
              label='Miejsce wystawienia:'
            />
            <Input type='date' onChange={setSaleDate} label='Data sprzedaży:' />
          </div>
          {/*------------------------------------------------------------------------------------------------*/}
          <div className='flex flex-col lg:flex-row gap-8 mt-8 border-b-2 pb-8'>
            <div className='flex-auto'>
              <Input
                type='text'
                onChange={setSellerName}
                label='Sprzedawca:'
                labelCss='text-xl text-black mb-6'
              />
              <Input type='text' onChange={setSellerNIP} label='NIP:' />
              <Input
                type='text'
                onChange={setSellerStreet}
                label='Ulica i numer:'
              />
              <div className='flex flex-col md:flex-row gap-x-8'>
                <Input
                  type='text'
                  onChange={setSellerZipCode}
                  label='Kod pocztowy:'
                  css={'col-span-1 flex-auto'}
                />
                <Input
                  type='text'
                  onChange={setSellerCity}
                  label='Miejscowość:'
                  css={'col-span-2 flex-auto'}
                />
              </div>
            </div>
            <div className='flex-auto'>
              <Input
                type='text'
                onChange={setBuyerName}
                label='Nabywca:'
                labelCss='text-xl text-black mb-6'
              />
              <Input type='text' onChange={setBuyerNIP} label='NIP:' />
              <Input
                type='text'
                onChange={setBuyerStreet}
                label='Ulica i numer:'
              />
              <div className='flex flex-col md:flex-row gap-x-8'>
                <Input
                  type='text'
                  onChange={setBuyerZipCode}
                  label='Kod pocztowy:'
                  css={'col-span-1 flex-auto'}
                />
                <Input
                  type='text'
                  onChange={setBuyerCity}
                  label='Miejscowość:'
                  css={'col-span-2 flex-auto'}
                />
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
            <Position
              inputFields={inputFields}
              handleChange={handleChange}
              handleDeleteField={handleDeleteField}
            />
            <button
              onClick={() => handleAddField()}
              className='text-teal-600 bg-transparent border border-solid border-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-6'
            >
              Dodaj pozycję
            </button>
            <div className='flex mt-6'>
              <Input
                type='text'
                onChange={setPayingMethod}
                label='Metoda płatności:'
                css='mr-6'
              />
              <Input type='date' onChange={setDays} label='Termin płatności:' />
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
        sumBrutto={sumBrutto}
        sumVat={sumVat}
        sumNetto={sumNetto}
        handlePrint={handlePrint}
        invoiceRef={invoiceRef}
      />
    </div>
  );
};

export default App;
