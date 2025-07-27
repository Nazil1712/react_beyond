import { useMemo, useState } from "react";
import { findNthPrime } from "../../utils/helper";

const HeavyOperations = () => {
    const [number, setNumber] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    console.log("Rendering.....")

    const prime = useMemo(()=>findNthPrime(number),[number])
    // const prime = findNthPrime(number)

    return (
      <div>
          <div className="flex justify-end mr-8 mt-5 w-96">
              <button onClick={()=>{
                  setIsDarkTheme(!isDarkTheme)
              }}>
                  {isDarkTheme ? '🌙' : '☀️'}
              </button>
          </div>
        <div className={`m-5 border border-black w-96 h-96 p-4 rounded-lg ${isDarkTheme && 'bg-gray-800'}`}>
          <input 
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
              className={`border-2  border-amber-500 outline-none rounded-lg p-2 
                  ${isDarkTheme && 'text-white'}`}
              />
              <h1 className={`font-semibold text-4xl mt-4 ${isDarkTheme && 'text-white'}`}>n<sup>th</sup> Prime : {prime}</h1>
        </div>
      </div>
    )
}

export default HeavyOperations
