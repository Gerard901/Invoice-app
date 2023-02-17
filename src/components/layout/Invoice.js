import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = (props) => {
  const {
    invoiceType,
    invoiceDate,
    invoiceNumber,
    invoicePlace,
    saleDate,
    buyerName,
    buyerCity,
    buyerNIP,
    buyerStreet,
    buyerZipCode,
    sellerName,
    sellerCity,
    sellerNIP,
    sellerStreet,
    sellerZipCode,
    inputFields,
    days,
    payingMethod,
  } = props;

  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: 'Faktura ' + invoiceNumber,
  });

  return (
    <div
      ref={invoiceRef}
      className='container lg:max-w-7xl shadow-md mx-auto py-10 px-16 rounded bg-white mt-8'
    >
      <div className='flex justify-between'>
        <h1 className='font-bold text-3xl'>FAKTURA {invoiceNumber}</h1>
        <div className='flex flex-col text-right'>
          <p>{invoicePlace}</p>
          <p>Data wystawienia: {invoiceDate}</p>
          <p>Data zakończenia dostawy/usługi: {saleDate}</p>
        </div>
      </div>
      <div className='flex my-10'>
        <div className='flex-col min-w-[50%]'>
          <h1 className='font-bold'>Sprzedawca:</h1>
          <p>{sellerName}</p>
          <p>{sellerStreet}</p>
          <p>
            {sellerZipCode} {sellerCity}
          </p>
          <p>NIP: {sellerNIP}</p>
        </div>
        <div className='flex-col min-w-[50%]'>
          <h1 className='font-bold'>Nabywca:</h1>
          <p>{buyerName}</p>
          <p>{buyerStreet}</p>
          <p>
            {buyerZipCode} {buyerCity}
          </p>
          <p>NIP: {buyerNIP}</p>
        </div>
      </div>
      <div>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='border border-black py-3'>LP</th>
              <th className='border border-black py-3'>
                Nazwa towaru lub usługi
              </th>
              <th className='border border-black py-3'>Ilość</th>
              <th className='border border-black py-3'>jm</th>
              <th className='border border-black py-3'>
                Cena jedn.
                <br />
                netto
              </th>
              <th className='border border-black py-3'>
                Wartość
                <br />
                netto
              </th>
              <th className='border border-black py-3'>
                VAT
                <br />
                (%)
              </th>
              <th className='border border-black py-3'>
                Wartość
                <br /> VAT
              </th>
              <th className='border border-black py-3'>
                Wartość
                <br />
                brutto
              </th>
            </tr>
          </thead>
          <tbody>
            {inputFields.map((inputField, index) => {
              return (
                <tr key={index} className='text-center'>
                  <td className='border border-black py-3'>{index + 1}</td>
                  <td className='border border-black py-3'>
                    {inputFields[index].name}
                  </td>
                  <td className='border border-black py-3'>
                    {inputFields[index].quantity}
                  </td>
                  <td className='border border-black py-3'>
                    {inputFields[index].unit}
                  </td>
                  <td className='border border-black py-3'>
                    {inputFields[index].priceNetto}
                  </td>
                  <td className='border border-black py-3'>
                    {inputFields[index].valueNetto}
                  </td>
                  <td className='border border-black py-3'>
                    {inputFields[index].vatProcent}
                  </td>
                  <td className='border border-black py-3'></td>

                  <td className='border border-black py-3'>
                    {inputFields[index].valueBrutto}
                  </td>
                </tr>
              );
            })}
            <tr className='text-center'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='font-bold'>Razem:</td>
              <td className='border border-black py-3'>test1</td>
              <td className='border border-black py-3'>XX</td>
              <td className='border border-black py-3'>t</td>

              <td className='border border-black py-3'>test3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-8'>
        <p>Metoda płatności: {payingMethod}</p>
        <p>Termin płatności: {days}</p>
      </div>
      <button
        onClick={() => handlePrint()}
        className='flex mt-4 font-bold py-2 px-4 bg-green-500 text-white rounded'
      >
        Drukuj / PDF
      </button>
    </div>
  );
};

export default Invoice;
