import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrenctChange,
    currencyOptions =[],
    amountDisable=false,
    currencyDisable=false,
    selectcurrency="usd",
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor = {amountInputId}   className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrenctChange && onCurrenctChange(e.target.value)}
                    
                >
                    
                        {currencyOptions.map((currencyOptions) => (
                            <option value = {currencyOptions}>
                            {curr}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox
