import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="w-60 h-60 rounded-xl">
        <h1 className='bg-green-400 tex-black p-4 rounded-xl'>Tailwind test</h1>
      <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        className="rounded-t-xl w-full h-100 top-10 "
      />
      <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
        <h1 className="font-bold  font-mono  text-xl">Available soon</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quas suscipit dolore odio, doloremque nemo libero facilis delectus sit nesciunt est magni ducimus quod expedita. Eligendi magnam a veniam deleniti?</p>
      </div>
    </div>
         
         
    </>
        )
}

export default App
