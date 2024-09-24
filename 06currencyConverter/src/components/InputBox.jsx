import React,{useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange, //amount change krke dikhayenge 
  onCurrencyChange,  //currency bhi show krni h ki change hoke kya hui
  currencyOptions =[],  //list of currencies available
  selectCurrency='usd',
  amountDisable=false,
  currencyDisable=false,//kuch user amount dena chahte h ya nhi dena chahte h
  className = "",
}) {

    const amountInputId = useId() // even if the component re-renders multiple times, the ID remains consistent, ensuring proper association and avoiding duplication issues.

  return (
    //back tick ke andar isliye h taaaki upper html mein likhe classname mein user apni koi css dega toh voh yahan implement ho jayegi 
 
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
               <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId} // the <label> is linked to the input element with the corresponding ID amountInputId.
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //& isliye liya h just in case null value pass hoye toh
             //Number mein wrap kr rhe h kyunki value json se aarhi h and yahan input type number h
             />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
              >
                
                  {currencyOptions.map((currency)=> ( //currencyOptions was our array having a list of all the currencies available
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                  ))}
              
              </select> 
          </div> 
      </div>
  );
}

export default InputBox;