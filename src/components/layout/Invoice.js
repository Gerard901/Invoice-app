import React from 'react';

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
    sumBrutto,
    sumNetto,
    sumVat,
    handlePrint,
    invoiceRef,
  } = props;

  return (
    <>
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
            <p>Typ: {invoiceType}</p>
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
          <table className='table-auto w-full text-xs'>
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
                    <td className='border border-black py-3'>
                      {(
                        inputFields[index].valueNetto *
                        (inputFields[index].vatProcent / 100)
                      ).toFixed(2)}
                    </td>

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
                <td className='border border-black py-3'>{sumNetto}</td>
                <td className='border border-black py-3'>XX</td>
                <td className='border border-black py-3'>{sumVat}</td>

                <td className='border border-black py-3'>{sumBrutto}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-8'>
          <p>Metoda płatności: {payingMethod}</p>
          <p>Termin płatności: {days}</p>
          <h2 className='font-bold text-2xl mt-6'>
            Wartość brutto: {sumBrutto} zł
          </h2>
        </div>
      </div>
      <div className='container lg:max-w-7xl shadow-md mx-auto py-10 px-16 rounded bg-white'>
        <button
          onClick={() => handlePrint()}
          className='text-teal-600 bg-transparent border border-solid border-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        >
          Drukuj / PDF
        </button>
      </div>
    </>
  );
};

export default Invoice;
