"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Converter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('ARS');
    const [amount, setAmount] = useState('');
    const [convertedResult, setConvertedResult] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/currencies/')
        .then(response => setCurrencies(response.data))
        .catch(error => console.error('Error fetching currencies: ', error))
    }, []);

    const convertCurrency = () => {
        axios.get(`http://localhost:8000/api/convert/${fromCurrency}/${toCurrency}/${amount}/`)
        .then(response => setConvertedResult(response.data.converted_amount))
        .catch(error => console.error('Error converting currency: ', error))
    };

    return(
        <div className='mt-20 mb-20 flex justify-center items-center'>
          <div>
            
            <h1 className='text-center font-onest font-bold mb-7 text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>Convertidor de Divisas</h1> 
            <div className='grid grid-cols-12 gap-x-3'>
              <div className='col-span-6'>
                <h3 className='text-xs md:text-sm lg:text-sm xl:text-md mb-1 ml-2'>De:</h3>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={e => setFromCurrency(e.target.value)}>
                  {currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code}</option>)}
                </select>
              </div>
              <div className='col-span-6'>
                <h3 className='text-xs md:text-sm lg:text-sm xl:text-md mb-1 ml-2'>A: </h3>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={e => setToCurrency(e.target.value)}>
                  {currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code}</option>)}
                </select>
                </div>
            </div>
            <div className='px-3 mt-3 mb-5'>
              <h3 className='text-sm mb-2 ml-1'>Cantidad:</h3>
              <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 py-2' onChange={e => setAmount(e.target.value)}/>
              <div className='flex justify-center mt-4'>
                <button className='mt-2 border text-lg font-bold border-orange-600 hover:border-orange-700 rounded-xl py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white' onClick={convertCurrency}>Convertir</button>
              </div>
            </div>
            {convertedResult && <div className='flex justify-center rounded-xl bg-white py-2'><p className='text-black mr-2'>{amount} {fromCurrency}</p> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
  </svg> <p className="ml-2">{convertedResult} {toCurrency}</p></div>}
          
          </div>
        </div>
    )
}

export default Converter