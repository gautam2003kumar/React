import { useState } from "react"
import Button from "./Button"


function App() {
  const [color, setColor] = useState("#0d384a")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <Button col="red" setColor={setColor} />
          <Button col="blue" setColor={setColor} />
          <Button col="green" setColor={setColor} />
          <Button col="white" setColor={setColor} />
          <Button col="black" setColor={setColor} />
          <Button col="pink" setColor={setColor} />
          <Button col="olive" setColor={setColor} />
          <Button col="yellow" setColor={setColor} />
          <Button col="purple" setColor={setColor} />
          <Button col="gray" setColor={setColor} />
          <Button col="lavender" setColor={setColor} />
        </div>
      </div>
    </div>
  )
}

export default App;