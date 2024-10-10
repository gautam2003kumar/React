import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8); // Default length 8
  const [numberAllowed, setNumberAllowed] = useState(false); // Allow numbers toggle
  const [charAllowed, setCharAllowed] = useState(false); // Allow special characters toggle
  const [password, setPassword] = useState(""); // Store generated password

  const passwordGenerater = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base string for letters
    if (numberAllowed) str += "0123456789"; // Add numbers if allowed
    if (charAllowed) str += "!@#$%^&*()_+~|}{[]:;?><,./-=`."; // Add special characters if allowed

    let pass = ""; // Initialize empty password
    for (let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random() * str.length); // Random index for character
      pass += str.charAt(charIdx); // Append character to password
    }

    setPassword(pass); // Set the generated password

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerater()
  }, [length, numberAllowed, charAllowed, passwordGenerater])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>passwordGenerater</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py -.5 shrink-0'
        >copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           name="" 
           id="numberInput"
           onChange={()=>{
            setNumberAllowed((prev) => !prev);
           }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           name="" 
           id="charInput"
           onChange={()=>{
            setCharAllowed((prev) => !prev);
           }}
          />
          <label htmlFor='charInput'>Charcaters</label>
        </div>
      </div>

    </div>
  );
}

export default App;
