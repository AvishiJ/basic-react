//remember hmne file ka extension .js rakha h kyunki function returns js so its better to have it than .jsx
import {useEffect,useState} from 'react'

function useCurrencyInfo(currency) {           //we usually use the word "use" infront of custom hooks just like normal existing hooks
    const [data,setData]=useState({}) //empty state just in case koi value na mile
  useEffect (()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/{currency}.json`
).then((res)=> res.json())   //jo data aaya api se voh string format mein tha toh hme use json mein convert krna pad jayega  
 .then((res)=> setData(res[currency]))    //jo ab value h response mein currency ki uspe set krdenge
 console.log(data);                
  },[currency]) //2nd parameter is dependency array which means agar yeh function ki value change horhi h toh ispe depend kregi ki jab bhi currency change hogi function call hoga

  return data
}

export default useCurrencyInfo;